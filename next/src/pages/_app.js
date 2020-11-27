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
	return Component.getInitialProps
					? await Component.getInitialProps(ctx) : {};
};

export default withRedux(Root);
