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
	fetchTodoList: {
		type: modulePrefix + 'saga/fetchTodoList',
	},
};

export default {
	...reducer,
	saga: saga,
};
