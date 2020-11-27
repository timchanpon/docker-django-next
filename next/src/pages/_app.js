import '../styles/app.scss';

import { withRedux } from '../stores/store';
import HeaderNav from '../components/base/headerNav';

function Root({ Component, pageProps }) {
	return (
		<>
			<HeaderNav />
			<Component {...pageProps} />
		</>
	);
}

Root.getInitialProps = async ({ Component, ctx }) => {
	const { getInitialProps } = Component;

	return getInitialProps && await getInitialProps(ctx);
};

export default withRedux(Root);
