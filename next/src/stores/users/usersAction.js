const reducer = {
	clearUserData: {
		type: 'users/clearUserData',
	},

	// With payload
	setUserData(payload) {
		return {
			type: 'users/setUserData',
			payload: payload,
		};
	},
};

const saga = {
	logout: {
		type: 'users/logout',
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
};

export default {
	...reducer,
	saga: saga,
};
