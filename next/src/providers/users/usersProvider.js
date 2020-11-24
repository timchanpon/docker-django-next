import { callAPI } from '../request';

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
			},
		});
	},
	logout() {
		return callAPI({
			method: 'POST',
			url: appPath + 'logout',
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
