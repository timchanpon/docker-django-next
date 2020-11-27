import cookie from 'js-cookie';
import router from 'next/router';

import { isAuthCookieName, pathToLoginPage } from '../config';

/*
 * Check if user is authenticated.
 *
 * @param {object} req: context.req
 * @return {boolean} isAuth
**/
export function checkAuth({ req }) {
	let isAuth;

	if (process.browser) {
		isAuth = cookie.get(isAuthCookieName) ? true : false;
	} else {
		const reqCookie = req.headers.cookie;
		const isAuthCookie = reqCookie?.includes(isAuthCookieName + '=True');

		isAuth = isAuthCookie ? true : false;
	}

	return isAuth;
}

/*
 * Force redirect to login page.
 *
 * @param {object} res: context.res
 * @return {object} anonymous: Redirection (Promise)
**/
export function redirectToLoginPage({ res }) {
	return process.browser
					? router.push(pathToLoginPage)
					: res.writeHead(302, { 'Location': pathToLoginPage }).end();
};

/*
 * (HOC) Component wrapper with authentiation.
 *
 * @param {object} Component: wrapped component
 * @return isAuth
 * 					? {function} wrapper: getInitialProps
 * 					: {object} anonymous: Redirection (Promise)
**/
export function withAuthGuard(Component) {
	const wrapper = props => <Component {...props} />;

	wrapper.getInitialProps = async (ctx) => {
		const isAuth = checkAuth(ctx);

		if (!isAuth) return redirectToLoginPage(ctx);

		return Component.getInitialProps
						? await Component.getInitialProps(ctx) : {};
	};

	return wrapper;
}

/*
 * Function wrapper for getServerSideProps with authentication.
 *
 * @param {object} ctx: context
 * @param {function} wrappedFunc: getServerSideProps
 * @return isAuth
 * 					? {object} anonymous: Result of wrapped function
 * 					: {object} anonymous: Props
**/
export const auth = {
	getServerSideProps(ctx, wrappedFunc) {
		const isAuth = checkAuth(ctx);

		if (!isAuth) {
			redirectToLoginPage(ctx);

			return { props: {} };
		}

		return wrappedFunc(ctx);
	},
};
