import Header from './Header';

const Root = (props) => (
	<div>
		<Header />
		{props.children}
	</div>
);

export default Root;
