import config from '../config';

export function getJWT() {
	return localStorage.getItem(config.jwtStorageKey);
}

export function setJWT(jwt) {
	localStorage.setItem(config.jwtStorageKey, jwt);
}

export function removeJWT() {
	localStorage.removeItem(config.jwtStorageKey);
}
