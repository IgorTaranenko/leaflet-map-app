import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../components/App';
import Header from '../components/Header';
import {useRoutes} from '../hooks/useRoutes.js';

export default function Root ({store}) {
	const routes = useRoutes(false);
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