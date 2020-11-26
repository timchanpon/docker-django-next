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
	fetchUserData(payload) {
		return callAPI({
			headers: setHeaders(payload.cookie),
			method: 'GET',
			url: appPath + 'data',
			params: {
				withTodos: payload.withTodos,
			},
		});
	},
};
