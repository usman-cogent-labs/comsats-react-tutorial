import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUserDetails } from '../services/api';

const UserDetails = () => {
	const [userDetails, setUserDetails] = useState({});
	const navigate = useNavigate();
	console.log(userDetails);
	const params = useParams();
	const getUserDetails = async () => {
		const result = await fetchUserDetails(params?.id);
		setUserDetails(result?.data);
	};

	useEffect(() => {
		if (isNaN(parseInt(params?.id))) navigate('/');
		else getUserDetails();
	}, []);

	return (
		<div>
			<h1>User details</h1>

			<h3>Name</h3>
			<p>{userDetails?.name}</p>

			<h3>Username</h3>
			<p>{userDetails?.username}</p>

			<h3>Address</h3>
			<p>{userDetails?.address?.street + ' ' + userDetails?.address?.suite}</p>

			<h3>Company</h3>
			<p>{userDetails?.company?.name + ' ' + userDetails?.company?.catchPhrase}</p>
		</div>
	);
};

export default UserDetails;
