import { modulePrefix } from './config';

const reducer = {
	// With payload
	setTodoList(payload) {
		return {
			type: modulePrefix + 'setTodoList',
			payload: {
				todos: payload.todos,
			},
		};
	},
};

const saga = {
	// With payload
	fetchTodoList(payload) {
		return {
			type: modulePrefix + 'saga/fetchTodoList',
			payload: {
				cookie: payload?.cookie,
			},
		};
	},
};

export default {
	...reducer,
	saga: saga,
};
