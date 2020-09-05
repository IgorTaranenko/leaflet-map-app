import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppMap from '../components/AppMap.js';
import Header from '../components/Header';
import {useRoutes} from '../hooks/useRoutes.js';
import {connect} from 'react-redux';

function Root ({store, isAuth}) {
	const routes = useRoutes(isAuth);
	return (
		<Provider store={store}>
			<Header></Header>
			<Container>
				<AppMap></AppMap>
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