import { combineReducers } from 'redux';

import todosReducer from './todos/todosReducer';
import usersReducer from './users/usersReducer';

const rootReducer = combineReducers({
	todo: todosReducer,
	user: usersReducer,
});

export default rootReducer;
