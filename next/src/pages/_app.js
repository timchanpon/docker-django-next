import '../styles/app.scss';

import { wrapper } from '../stores/store';
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
	let props = {};

	if (Component.getInitialProps)
		props = await Component.getInitialProps(ctx);

	return { props };
};

export default wrapper.withRedux(Root);
