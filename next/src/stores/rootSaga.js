import { all } from 'redux-saga/effects';

import usersSaga from './users/usersSaga';

export default function* rootSaga() {
	yield all([
		usersSaga(),
	]);
}
