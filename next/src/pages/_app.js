import '../styles/app.scss';

import Link from 'next/link';
import { Provider } from 'react-redux';

import store from '../stores/store';

function Root({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<header>
				<Link href="/">
					<button className="header-nav-btn">Top</button>
				</Link>
				<Link href="/users/user-info">
					<button className="header-nav-btn">User Info</button>
				</Link>
			</header>

			<Component {...pageProps} />
		</Provider>
	);
}

export default Root;
