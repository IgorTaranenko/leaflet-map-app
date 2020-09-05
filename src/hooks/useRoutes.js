import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Auth from '../components/Auth';
import App from '../components/App.js';
import About from '../components/About';

export const useRoutes = isAuth => {
	if (isAuth) {
		return (
			<Switch>
				<Route path="/app"><App /></Route>
				<Route path="/about"><About /></Route>
				<Redirect to="/app" />
			</Switch>
		);
	}
	return (
		<Switch>
			<Route path="/"><Auth /></Route>
			<Redirect to="/" />
		</Switch>
	);	
}