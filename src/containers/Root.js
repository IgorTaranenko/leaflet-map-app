import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../components/App';
import Header from '../components/Header';
import {useRoutes} from '../hooks/useRoutes.js';

export default function Root ({store}) {
	const routes = useRoutes(true);
	return (
		<Provider store={store}>
			<Header></Header>
			<Fragment>
				<Router>
					{routes}
				</Router>
			</Fragment>
		</Provider>
	);
}