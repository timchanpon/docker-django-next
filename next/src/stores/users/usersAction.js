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
	fetchUserData(payload) {
		return {
			type: modulePrefix + 'saga/fetchUserData',
			payload: {
				withTodos: payload.withTodos,
			},
		};
	},
};

export default {
	...reducer,
	saga: saga,
};
