import { callAPI } from '../request';

export default {
	login(credentials) {
		return callAPI({
			method: 'POST',
			url: '/users/login',
			data: {
				username: credentials.username,
				password: credentials.password,
			},
		});
	},
	logout() {
		return callAPI({
			method: 'POST',
			url: '/users/logout',
		});
	},
	fetchUserData() {
		return callAPI({
			method: 'GET',
			url: '/users/data',
		});
	},
};
