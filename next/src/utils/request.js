import axios from 'axios';

import storage from '../utils/storage';
import { apiEndPoint } from '../config';

function axiosInstance(isWithAuth) {
	const auth = isWithAuth ? `JWT ${storage.getJWT()}` : '';

	return axios.create({
		baseURL: apiEndPoint,
		headers: {
			'Accept': 'application/json',
			'Authorization': auth,
		},
	});
}

function callApi({ isWithAuth, ...options }) {
	axiosInstance.request({
		...options,
	}).then(res => {
		resolve(res);
	}).catch(err => {
		reject(err);
	});
}

export { callApi };
