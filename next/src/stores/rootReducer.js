import { combineReducers } from 'redux';

import todosReducer from './todos/todosReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
	todo: todosReducer,
	user: usersReducer,
});

export default (state, action) => {
	const { payload, type } = action;
	const HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__';

	if (type === HYDRATE) return payload;

	return rootReducer(state, action);
};
