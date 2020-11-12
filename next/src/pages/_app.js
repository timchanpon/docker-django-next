import '../styles/app.scss';

import { Provider } from 'react-redux';

import store from '../stores/store';

function Root({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default Root;
