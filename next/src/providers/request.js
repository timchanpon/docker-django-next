import axios from 'axios';

import { getApiEndPoint } from '../config';

export function setCookieToRequest(cookie) {
	return cookie ? { 'Cookie': cookie } : {};
}

export async function callAPI(options) {
	const axiosInstance = axios.create({
		baseURL: getApiEndPoint(),
		headers: {
			'Accept': 'application/json',
		},
	});

	return axiosInstance
					.request(options)
					.then(res => res)
					.catch(err => err);
}
