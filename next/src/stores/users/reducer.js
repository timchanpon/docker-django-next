const modulePrefix = 'users/';

const initialState = {
	name: '',
	email: '',
	todos: null,
};

function usersReducer(state=initialState, action) {
	const type = action.type.replace(modulePrefix, '');

	if (type === 'setUserData') {
		state = {
			...state,
			name: action.payload.name,
			email: action.payload.email,
			todos: action.payload.todos,
		};
	} else if (type === 'clearUserData') {
		state = initialState;
	}

	return state;
}

export default usersReducer;
