import { call, fork, put, takeLatest } from 'redux-saga/effects';

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
		yield fork(fetchUserData);
	} catch (err) {
		return console.error(err);
	}
}

function* fetchUserData() {
	const options = {
		withAuth: true,
		method: 'GET',
		url: '/users/data',
	};

	try {
		const { data } = yield call(callAPI, options);
		const action = {
			type: 'users/setUserData',
			payload: data,
		};

		yield put(action);
	} catch (err) {
		return console.error(err);
	}
}

export default function* usersSaga() {
	yield takeLatest('users/login', login);
	yield takeLatest('users/fetchUserData', fetchUserData);
}
