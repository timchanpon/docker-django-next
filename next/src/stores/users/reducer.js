const modulePrefix = 'users/';

const initialState = {
	name: '',
	email: '',
};

function usersReducer(state=initialState, action) {
	const type = action.type.replace(modulePrefix, '');

	if (type === 'setUserData') {
		state = {
			...state,
			name: action.payload.name,
			email: action.payload.email,
		};
	} else if (type === 'clearUserData') {
		state = {
			...state,
			name: '',
			email: '',
		};
	}

	return state;
}

export default usersReducer;