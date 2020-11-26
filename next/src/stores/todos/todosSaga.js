import { put, takeLatest } from 'redux-saga/effects';

import { modulePrefix } from './config';
import { todosAction } from '../actions';
import { todosProvider } from '../../providers';

function* fetchTodoList() {
	try {
		const { data } = yield call(todosProvider.fetchTodoList);
		const action = todosAction.setTodoList(data);

		yield put(action);
	} catch(err) {
		return console.error(err);
	}
}

export default function* usersSaga() {
	yield takeLatest(modulePrefix + 'saga/fetchTodoList', fetchTodoList);
}
