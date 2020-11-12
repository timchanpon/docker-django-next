import { connect } from 'react-redux';

function Index(props) {
	return <h1>Hello</h1>;
}

function mapStateToProps(state) {
	return state;
};

export default connect(mapStateToProps)(Index);
