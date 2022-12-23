import { configureStore } from '@reduxjs/toolkit';
import {locationsAPI} from "@toover/locations";

const apiSlices = [locationsAPI];
const apis = Object.fromEntries(apiSlices.map((api) => [api.reducerPath, api.reducer]));
const middlewares = apiSlices.map((api) => api.middleware);

export const store = configureStore({
    // @ts-ignore
    reducer: {
        ...apis,
    },
    // @ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([...middlewares]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
