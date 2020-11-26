import '../styles/app.scss';

import { Provider } from 'react-redux';

import store from '../stores/store';
import HeaderNav from '../components/base/headerNav';

function Root({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<HeaderNav />
			<Component {...pageProps} />
		</Provider>
	);
}

export default Root;
