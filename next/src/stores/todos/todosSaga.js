import { call, put, takeLatest } from 'redux-saga/effects';

import { modulePrefix } from './config';
import { todosAction } from '../actions';
import { todosProvider } from '../../providers';

function* fetchTodoList({ payload }) {
	try {
		const { data } = yield call(todosProvider.fetchTodoList, payload);
		const action = todosAction.setTodoList({ todos: data });

		yield put(action);
	} catch(err) {
		return console.error(err);
	}
}

export default function* usersSaga() {
	yield takeLatest(modulePrefix + 'saga/fetchTodoList', fetchTodoList);
}
