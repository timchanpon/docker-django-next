import { isAuthCookieName } from '../../config';
import { callAPI, setCookieToRequest } from '../request';

const appPath = 'users/';

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
			headers: setCookieToRequest(payload.cookie),
			method: 'GET',
			url: appPath + 'data',
			params: {
				withTodos: payload.withTodos,
			},
		});
	},
};
