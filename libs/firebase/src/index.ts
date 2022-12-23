import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';

// @ts-ignore
const env = import.meta.env;

export * from './utils';
export const app = initializeApp({
	apiKey: env.TOOVER_FIREBASE_API_KEY,
	authDomain: env.TOOVER_FIREBASE_AUTH_DOMAIN,
	projectId: env.TOOVER_FIREBASE_PROJECT_ID,
	storageBucket: env.TOOVER_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: env.TOOVER_FIREBASE_MESSAGING_SENDER_ID,
	appId: env.TOOVER_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
