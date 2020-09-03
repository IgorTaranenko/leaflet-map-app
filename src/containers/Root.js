import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../components/App';
import Header from '../components/Header';
import {useRoutes} from '../hooks/useRoutes.js';
import {connect} from 'react-redux';

function Root ({store, isAuth}) {
	const routes = useRoutes(isAuth);
	return (
		<Provider store={store}>
			<Header></Header>
			<Container>
				<Router>
					{routes}
				</Router>
			</Container>
		</Provider>
	);
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth
    };
};

export default connect(mapStateToProps, null)(Root);