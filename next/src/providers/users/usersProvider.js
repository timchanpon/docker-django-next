import { callAPI } from '../request';
import { isAuthCookieName } from '../../config';

const appPath = 'users/';

function setHeaders(cookie) {
	if (!cookie) return {};

	return {
		'Cookie': cookie,
	};
};

export default {
	login(credentials) {
		return callAPI({
			method: 'POST',
			url: appPath + 'login',
			data: {
				username: credentials.username,
				password: credentials.password,
				isAuthCookieName: isAuthCookieName,
			},
		});
	},
	logout() {
		return callAPI({
			method: 'POST',
			url: appPath + 'logout',
			data: {
				isAuthCookieName: isAuthCookieName,
			},
		});
	},
	fetchUserData(cookie=null) {
		return callAPI({
			headers: setHeaders(cookie),
			method: 'GET',
			url: appPath + 'data',
		});
	},
};
