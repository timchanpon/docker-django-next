import { callAPI, setCookieToRequest } from '../request';

const appPath = 'todos/';

export default {
	fetchTodoList(payload) {
		return callAPI({
			headers: setCookieToRequest(payload.cookie),
			method: 'GET',
			url: appPath + 'list',
		});
	},
	createTodo(payload) {
		return callAPI({
			method: 'POST',
			url: appPath + 'create',
			data: {
				body: payload.body,
			},
		});
	},
	updateTodo(payload) {
		return callAPI({
			method: 'POST',
			url: appPath + 'update',
			data: {
				id: payload.id,
				body: payload.body,
			},
		});
	},
};
