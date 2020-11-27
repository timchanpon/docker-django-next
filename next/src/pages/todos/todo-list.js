import { useState } from 'react';

import { todosProvider } from '../../providers';
import { withAuthGuard } from '../../utils/auth';

function TodoList() {
	const [isValid, setIsValid] = useState(false);

	const submit = async (e) => {
		e.preventDefault();

		const payload = { body: e.target.body.value };
		const { data } = await todosProvider.createTodo(payload);

		setIsValid(data.isValid);
		setTimeout(() => setIsValid(false), 2500);
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
				<button type="submit">Submit</button>
			</form>

			{isValid && <p>Your todo has been created successfully.</p>}
		</>
	);
}

export default withAuthGuard(TodoList);
