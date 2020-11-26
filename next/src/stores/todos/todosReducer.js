import { modulePrefix } from './config';

const initialState = {
	list: [],
};

function todosReducer(state=initialState, action) {
	const type = action.type.replace(modulePrefix, '');

	if (type === '') {
		state = {
			...state,
		};
	}

	return state;
}

export default todosReducer;
