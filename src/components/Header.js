import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../style/header.less';

const Header = () => {
	return (
		<header>
			<div className="line"></div>
			<div className="wrapper wrapper-row wrapper-space-beetween">
				<h2 className="ml-3">React leaflet APP</h2>
				<ul className="nav justify-content-end mr-2">
				  <li className="nav-item">
				    <a className="nav-link active" href="/">Главная</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link" href="/about">Про автора</a>
				  </li>
				</ul>
			</div>
		</header>
	);
}
export default Header