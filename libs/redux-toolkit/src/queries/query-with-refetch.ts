import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import {getEnvironment} from "@toover/core";
import {auth} from "@toover/firebase";


const env = getEnvironment();

// create a new mutex
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
    baseUrl: env.api,
    prepareHeaders: (headers) => {
        headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
        headers.set('Accept-Language', localStorage.getItem('language') || `en-US`);
        return headers;
    },
});

export const BaseQueryWithReauth: BaseQueryFn<string | FetchArgs,
    unknown,
    FetchBaseQueryError> = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const token = await auth.currentUser?.getIdToken();
                localStorage.setItem('token', token!);
                result = await baseQuery(args, api, extraOptions);
            } finally {
                // release must be called once the mutex should be released again.
                release();
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};
