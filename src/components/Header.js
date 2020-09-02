import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../style/header.less';

const Header = () => {
	return (
		<header>
			<div className="line"></div>
			<h2 className="text-center">React leaflet APP</h2>
		</header>
	);
}
export default Header