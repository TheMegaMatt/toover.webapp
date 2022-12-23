interface ImportMetaEnv {
	readonly TOOVER_FIREBASE_API_KEY: string;
	readonly TOOVER_FIREBASE_AUTH_DOMAIN: string;
	readonly TOOVER_FIREBASE_PROJECT_ID: string;
	readonly TOOVER_FIREBASE_STORAGE_BUCKET: string;
	readonly TOOVER_FIREBASE_MESSAGING_SENDER_ID: string;
	readonly TOOVER_FIREBASE_APP_ID: string;
	readonly TOOVER_API_BASE_URL: string;
	readonly TOOVER_ENV: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
