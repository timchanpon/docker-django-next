import { call, takeLatest } from 'redux-saga/effects';

import { setJWT } from '../../utils/storage';
import { callAPI } from '../../utils/request';

function* login({ credentials }) {
	const options = {
		withAuth: false,
		method: 'POST',
		url: '/auth-emit-jwt',
		data: {
			username: credentials.username,
			password: credentials.password,
		},
	};

	try {
		const { data } = yield call(callAPI, options);

		setJWT(data.token);
	} catch (err) {
		console.error(err);
	}
}

export default function* usersSaga() {
	yield takeLatest('users/login', login);
}
