import { all } from 'redux-saga/effects';

import usersSaga from './users/sagas';

export default function* () {
	yield all([
		usersSaga(),
	]);
}
