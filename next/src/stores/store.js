import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

function store() {
	const sagaMiddleware = createSagaMiddleware();

	const storeInstance = createStore(
		rootReducer,
		applyMiddleware(sagaMiddleware),
	);

	sagaMiddleware.run(rootSaga);

	return storeInstance;
}

export default store();
