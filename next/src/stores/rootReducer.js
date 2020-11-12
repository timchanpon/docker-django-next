import { combineReducers } from 'redux';

import usersReducer from './users/reducer';

const rootReducer = combineReducers({
	user: usersReducer,
});

export default rootReducer;
