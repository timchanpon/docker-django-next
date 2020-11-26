import { useAuthGuard } from '../../hooks';
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

export async function getServerSideProps(ctx) {
	useAuthGuard(ctx);

	const payload = { cookie: ctx.req.headers.cookie };
	const { data } = await usersProvider.fetchUserData(payload);

	return {
		props: {
			userInfo: data,
		},
	};
}

export default UserInfo;
