import Link from 'next/link';

const style = {
	btn: {
		width: 150,
		margin: 5,
		fontSize: 15,
	},
};

const Header = () => (
	<header>
		<Link href="/">
			<button style={style.btn}>Home</button>
		</Link>
		<Link href="/about">
			<button style={style.btn}>About</button>
		</Link>
	</header>
);

export default Header;
