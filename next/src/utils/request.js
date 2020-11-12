import axios from 'axios';

import config from '../config';
import { getJWT } from '../utils/storage';

function axiosInstance(withAuth) {
	const auth = withAuth ? `JWT ${getJWT()}` : '';

	return axios.create({
		baseURL: config.apiEndPoint,
		headers: {
			'Accept': 'application/json',
			'Authorization': auth,
		},
	});
}

export async function callAPI({ withAuth, ...options }) {
	return axiosInstance(withAuth)
					.request({ ...options })
					.then(res => res)
					.catch(err => err);
}
