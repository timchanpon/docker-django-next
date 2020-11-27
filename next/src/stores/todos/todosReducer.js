import { modulePrefix } from './config';

const initialState = {
	list: [],
};

function todosReducer(state=initialState, action) {
	const type = action.type.replace(modulePrefix, '');

	if (type === 'setTodoList') {
		state = {
			...state,
			list: action.payload.todos,
		};
	}

	return state;
}

export default todosReducer;
