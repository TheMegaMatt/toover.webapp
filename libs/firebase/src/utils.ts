export function getErrorStringCode(error: { code: string }) {
	switch (error.code) {
		case 'auth/wrong-password':
		case 'auth/invalid-email':
			return 'auth.invalid-credentials';
		case 'auth/user-disabled':
			return 'auth.user-disabled';
		case 'auth/user-not-found':
			return 'auth.user-not-found';
		default:
			return 'auth.unknown-error';
	}
}
