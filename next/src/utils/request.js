import axios from 'axios';

import config from '../config';
import { getJWT } from '../utils/storage';

function axiosInstance(isWithAuth) {
	const auth = isWithAuth ? `JWT ${getJWT()}` : '';

	return axios.create({
		baseURL: config.apiEndPoint,
		headers: {
			'Accept': 'application/json',
			'Authorization': auth,
		},
	});
}

export function callApi({ isWithAuth, ...options }) {
	return new Promise((resolve, reject) => {
		axiosInstance
			.request({ ...options })
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
}
