import { auth } from '../../utils/auth';
import { usersProvider } from '../../providers';

function UserInfo(props) {
  return (
    <>
      <p>Your name: {props.userInfo.name}</p>
      <p>Your email: {props.userInfo.email}</p>
    </>
  );
}

async function initPropsSSR(ctx) {
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

export const getServerSideProps = ctx => auth.getServerSideProps(ctx, initPropsSSR);

export default UserInfo;
