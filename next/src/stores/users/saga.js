import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { callAPI } from '../../utils/request';

function* login({ credentials }) {
	const options = {
		method: 'POST',
		url: '/auth-emit-jwt',
		data: {
			username: credentials.username,
			password: credentials.password,
		},
	};

	try {
		yield call(callAPI, options);
		yield fork(fetchUserData);
	} catch (err) {
		return console.error(err);
	}
}

function* fetchUserData() {
	const options = {
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
