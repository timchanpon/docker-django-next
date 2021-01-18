import { useState } from 'react';

import { withState } from '../stores/store';
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
      const credentials = {
        username: username,
        password: password,
      }
      const action = usersAction.saga.login(credentials);

      props.dispatch(action);
    },
    logout() {
      props.dispatch(usersAction.saga.logout);
    },
  };

  return (
    <>
      <input type="text" onChange={inputHandlers.username} />
      <input type="password" onChange={inputHandlers.password} />

      <button onClick={methods.login} disabled={props.user.name}>LOGIN</button>
      <button onClick={methods.logout} disabled={!props.user.name}>LOGOUT</button>

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

export default withState(Index);
