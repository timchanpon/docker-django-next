import { connect } from 'react-redux';

import { useAuthGuard } from '../../hooks';
import { wrapper } from '../../stores/store';
import { usersProvider } from '../../providers';

function UserInfo(props) {
	return (
		<>
			<p>Your name: {props.userInfo.name}</p>
			<p>Your email: {props.userInfo.email}</p>
		</>
	);
}

async function initProps(ctx) {
	useAuthGuard(ctx);

	const payload = {
		withTodos: false,
		cookie: ctx.req.headers.cookie,
	};
	const { data } = await usersProvider.fetchUserData(payload);

	return {
		props: {
			userInfo: data,
		},
	};
}

export const getServerSideProps = wrapper.getServerSideProps(initProps);

export default connect(state => state)(UserInfo);
