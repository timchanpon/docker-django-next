import { modulePrefix } from './config';

const reducer = {
	clearUserData: {
		type: modulePrefix + 'clearUserData',
	},

	// With payload
	setUserData(payload) {
		return {
			type: modulePrefix + 'setUserData',
			payload: payload,
		};
	},
};

const saga = {
	logout: {
		type: modulePrefix + 'saga/logout',
	},
	fetchUserData: {
		type: modulePrefix + 'saga/fetchUserData',
	},

	// With payload
	login(username, password) {
		return {
			type: modulePrefix + 'saga/login',
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
