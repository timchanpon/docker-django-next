import { callAPI } from '../request';

const appPath = 'todos/';

export default {
	createTodo(payload) {
		return callAPI({
			method: 'POST',
			url: appPath + 'create',
			data: {
				body: payload.body,
			},
		});
	},
};
