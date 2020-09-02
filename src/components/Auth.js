import React from 'react';
import '../style/auth.less';

export const Auth = () => {
	
	return (
		
		<div className="wrapper">
			<form className="auth-form" action="/">
				<h3 className="mb-3">Авторизация</h3>
				<label>Логин: <input type="text" /></label>
				<label>Пароль: <input type="password" /></label>
			</form>
		</div>
	);
}