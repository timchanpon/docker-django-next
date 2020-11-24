import { callAPI } from '../request';

const appPath = 'users/';

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
	fetchUserData() {
		return callAPI({
			method: 'GET',
			url: appPath + 'data',
		});
	},
};
