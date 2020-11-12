import { jwtStorageKey } from '../config';

function getJWT() {
	return localStorage.getItem(jwtStorageKey);
}

function setJWT(jwt) {
	localStorage.setItem(jwtStorageKey, jwt);
}

function removeJWT() {
	localStorage.removeItem(jwtStorageKey);
}

export { getJWT, setJWT, removeJWT };
