import { compose } from 'redux';
import { useState } from 'react';

import { withState } from '../../stores/store';
import { todosProvider } from '../../providers';
import { withAuthGuard } from '../../utils/auth';
import { todosAction } from '../../stores/actions';

function TodoList(props) {
	const [isValid, setIsValid] = useState(false);

	const submit = async (e) => {
		e.preventDefault();

		const payload = { body: e.target.body.value };
		const { data } = await todosProvider.createTodo(payload);
		const action = todosAction.saga.fetchTodoList();

		props.dispatch(action);
		e.target.body.value = '';
		setIsValid(data.isValid);
		setTimeout(() => setIsValid(false), 2000);
	}

	return (
		<>
			<form onSubmit={submit}>
				<input
					name="body"
					type="text"
					max="20"
					required
				/>
				<button type="submit">Add Todo</button>

				{isValid && <span>&nbsp;&nbsp;Your todo has been created successfully.</span>}
			</form>

			<div>
				<p>Your todos:</p>
				<ul>
					{props.todo.list.map((todo, index) => <li key={index}>{todo.body}</li>)}
				</ul>
			</div>
		</>
	);
}

TodoList.getInitialProps = async ({ req, store }) => {
	const payload = process.browser ? {} : { cookie: req.headers.cookie };
	const action = todosAction.saga.fetchTodoList(payload);

	return await store.dispatch(action);
};

export default compose(withAuthGuard, withState)(TodoList);
