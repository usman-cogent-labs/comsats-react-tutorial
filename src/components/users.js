import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/api';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th scope='col'>#</th>
				<th scope='col'>Name</th>
				<th scope='col'>Username</th>
				<th scope='col'>Email</th>
			</tr>
		</thead>
	);
};

const TableBody = ({ users, navigate }) => (
	<tbody>
		{users.map((user) => (
			<tr onClick={() => navigate('/' + user?.id)} style={{ cursor: 'pointer' }}>
				<th scope='row'>{user.id}</th>
				<td>{user.name}</td>
				<td>{user.username}</td>
				<td>{user.email}</td>
			</tr>
		))}
	</tbody>
);

function Users() {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	const getUsers = async () => {
		const result = await fetchUsers();
		setUsers(result?.data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className='App container'>
			<table className='table'>
				<TableHeader />
				<TableBody users={users} navigate={navigate} />
			</table>
		</div>
	);
}

export default Users;
