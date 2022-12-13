import axios from 'axios';

export const fetchUsers = () => {
	return axios.get('https://jsonplaceholder.typicode.com/users');
};

export const fetchUserDetails = (id) => {
	return axios.get('https://jsonplaceholder.typicode.com/users/' + id);
};
