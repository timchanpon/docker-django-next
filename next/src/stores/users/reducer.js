const moduleName = 'users';

const initialState = {
	name: '',
	email: '',
};

function usersReducer(state=initialState, action) {
	switch (action.type) {
		case `${moduleName}/setUserData`:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
			};
		default:
			return state;
	}
}

export default usersReducer;
