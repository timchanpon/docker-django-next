import { call, fork, put, takeLatest } from 'redux-saga/effects';

import { modulePrefix } from './config';
import { usersAction } from '../actions';
import { usersProvider } from '../../providers';

function* login({ credentials }) {
  try {
    const payload = { withTodos: true };
    const action = usersAction.saga.fetchUserData(payload);

    yield call(usersProvider.login, credentials);
    yield put(action);
  } catch (err) {
    return console.error(err);
  }
}

function* logout() {
  try {
    yield call(usersProvider.logout);
    yield put(usersAction.clearUserData);
  } catch (err) {
    return console.error(err);
  }
}

function* fetchUserData({ payload }) {
  try {
    const { data } = yield call(usersProvider.fetchUserData, payload);
    const action = usersAction.setUserData(data);

    yield put(action);
  } catch (err) {
    return console.error(err);
  }
}

export default function* usersSaga() {
  yield takeLatest(modulePrefix + 'saga/login', login);
  yield takeLatest(modulePrefix + 'saga/logout', logout);
  yield takeLatest(modulePrefix + 'saga/fetchUserData', fetchUserData);
}
