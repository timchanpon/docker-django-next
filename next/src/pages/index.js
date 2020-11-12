import { useState } from 'react';
import { connect } from 'react-redux';

function Index(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const inputHandlers = {
		username: e => setUsername(e.target.value),
		password: e => setPassword(e.target.value),
	};

	const fetchUserData = () => {
		const action = {
			type: 'users/login',
			credentials: {
				username: username,
				password: password,
			},
		};

		props.dispatch(action);
	};

	return (
		<>
			<input type="text" onChange={inputHandlers.username} />
			<input type="password" onChange={inputHandlers.password} />
			<button onClick={fetchUserData}>LOGIN</button>

			<p>Your name: {props.users.name}</p>
			<p>Your email: {props.users.email}</p>
		</>
	);
}

function mapStateToProps(state) {
	return state;
};

export default connect(mapStateToProps)(Index);
