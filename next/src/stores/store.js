import { useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

function store() {
	const sagaMiddleware = createSagaMiddleware();
	const storeInstance = createStore(
		rootReducer,
		applyMiddleware(sagaMiddleware),
	);

	storeInstance.sagaTask = sagaMiddleware.run(rootSaga);

	return storeInstance;
}

export const { withRedux } = createWrapper(store);

export function withState(Component) {
	const wrapper = props => {
		props = {
			...props,
			...useSelector(state => state),
		};

		return <Component {...props} />;
	};

	wrapper.getInitialProps = async (ctx) => {
		const { store } = ctx;
		const { getInitialProps } = Component;
		const props = getInitialProps && await getInitialProps(ctx);

		/*
		 * Await async sagaTask on server
		 *
		 * Reference:
		 *  - Usage with Redux Saga
		 *  - https://openbase.io/js/next-redux-wrapper/documentation
		**/
		if (!process.browser) {
			store.dispatch(END);
			await store.sagaTask.toPromise();
		}

		return props;
	};

	return wrapper;
}
