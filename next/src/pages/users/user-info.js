import { usersProvider } from '../../providers';

function UserInfo(props) {
	return (
		<>
			<p>Your name: {props.userInfo.name}</p>
			<p>Your email: {props.userInfo.email}</p>
			<div>
				Your todos:
				<ul>
					{props.userInfo.todos.map((todo, index) => <li key={index}>{todo.body}</li>)}
				</ul>
			</div>
		</>
	);
}

export async function getServerSideProps({ req }) {
	if (process.browser) return;

	const cookie = req ? req.headers.cookie : null;
	const { data } = await usersProvider.fetchUserData(cookie);

	return {
		props: {
			userInfo: data,
		},
	};
}

export default UserInfo;
