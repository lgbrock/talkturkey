import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: 'https://talkturkey.herokuapp.com/api/',
});
