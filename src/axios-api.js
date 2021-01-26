import axios from 'axios';

export default (method, url, data) => {
	switch (method) {
		case 'POST':
			return axios.post(url, data);
		case 'GET':
		default:
			return axios.get(url, data);
	}
};
