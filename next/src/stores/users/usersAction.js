export default {
	logout: {
		type: 'users/logout',
	},
	clearUserData: {
		type: 'users/clearUserData',
	},
	fetchUserData: {
		type: 'users/fetchUserData',
	},

	// With payload
	login(username, password) {
		return {
			type: 'users/login',
			credentials: {
				username: username,
				password: password,
			},
		};
	},
	setUserData(payload) {
		return {
			type: 'users/setUserData',
			payload: payload,
		};
	},
};
