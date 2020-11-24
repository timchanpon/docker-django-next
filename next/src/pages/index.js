import { useState } from 'react';
import { connect } from 'react-redux';

import { usersAction } from '../stores/actions';

function Index(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const inputHandlers = {
		username: e => setUsername(e.target.value),
		password: e => setPassword(e.target.value),
	};

	const methods = {
		login() {
			const action = usersAction.login(username, password);

			props.dispatch(action);
		},
		logout() {
			props.dispatch(usersAction.logout);
		},
	};

	return (
		<>
			<input type="text" onChange={inputHandlers.username} />
			<input type="password" onChange={inputHandlers.password} />

			<button onClick={methods.login}>LOGIN</button>
			<button onClick={methods.logout}>LOGOUT</button>

			<p>Your name: {props.user.name}</p>
			<p>Your email: {props.user.email}</p>
			<div>
				Your todos:
				<ul>
					{props.user.todos.map((todo, index) => <li key={index}>{todo.body}</li>)}
				</ul>
			</div>
		</>
	);
}

function mapStateToProps(state) {
	return state;
};

export default connect(mapStateToProps)(Index);
