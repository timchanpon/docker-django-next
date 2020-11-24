export function getApiEndPoint() {
	const url = {
		SSR: 'http://web/api/',
		CSR: 'http://127.0.0.1:3000/api/',
	};

	return process.browser ? url.CSR : url.SSR;
}

export const isAuthCookieName = 'isAuthenticated';
