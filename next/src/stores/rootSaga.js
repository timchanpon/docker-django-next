import { all } from 'redux-saga/effects';

import todosSaga from './todos/todosSaga';
import usersSaga from './users/usersSaga';

export default function* rootSaga() {
  yield all([
    todosSaga(),
    usersSaga(),
  ]);
}
