import cookie from 'js-cookie';
import router from 'next/router';

import { isAuthCookieName, pathToLoginPage } from '../config';

function authGuardCSR() {
	const isAuth = cookie.get(isAuthCookieName);

	if (!isAuth) router.push(pathToLoginPage);
}

function authGuardSSR({ req, res }) {
	const cookie = req.headers.cookie;
	const isAuth = cookie && cookie.includes(isAuthCookieName + '=True');

	if (!isAuth)
		res.writeHead(302, { 'Location': pathToLoginPage }).end();
}

export default function useAuthGuard(ctx) {
	return process.browser ? authGuardCSR() : authGuardSSR(ctx);
};
