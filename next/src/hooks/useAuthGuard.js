import cookie from 'js-cookie';
import router from 'next/router';

import { isAuthCookieName, pathToLoginPage } from '../config';

const dummyProps = { props: {} };

function authGuardCSR() {
	const isAuth = cookie.get(isAuthCookieName);

	if (!isAuth) router.push(pathToLoginPage);

	return dummyProps;
}

function authGuardSSR({ req, res }) {
	const cookie = req.headers.cookie;
	const isAuth = cookie && cookie.includes(isAuthCookieName + '=True');

	if (!isAuth)
		res.writeHead(302, { 'Location': pathToLoginPage }).end();

	return dummyProps;
}

export default function useAuthGuard(ctx) {
	return process.browser ? authGuardCSR() : authGuardSSR(ctx);
};
