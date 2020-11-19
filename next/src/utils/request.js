import axios from 'axios';

import config from '../config';

export async function callAPI(options) {
	const axiosInstance = axios.create({
		baseURL: config.apiEndPoint,
		headers: {
			'Accept': 'application/json',
		},
	});

	return axiosInstance
					.request({ ...options })
					.then(res => res)
					.catch(err => err);
}
