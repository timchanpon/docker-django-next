import cookie from 'js-cookie';

import config from '../config';

export function getJWT() {
	return cookie.get(config.jwtStorageKey);
}

export function setJWT(jwt) {
	cookie.set(config.jwtStorageKey, jwt, { expires: 1 });
}

export function removeJWT() {
	cookie.remove(config.jwtStorageKey);
}
