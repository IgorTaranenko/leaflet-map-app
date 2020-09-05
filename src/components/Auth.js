import React, {useState} from 'react';
import {connect} from 'react-redux';
import {auth} from '../actions/actions.js';
import '../style/auth.less';

const Auth = (props) => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const inputLoginHandler = (e) => {
		setLogin(e.target.value);
	}
	const inputPasswordHandler = (e) => {
		setPassword(e.target.value);
	}
	const submitHandler = (e) => {
		e.preventDefault();
		const data = {login, password};
		props.logIN(data);
		setLogin('');
		setPassword('');
	}
	return (
		
		<div className="wrapper wrapper-v-center wrapper-g-center mt-5 ">
			<form className="auth-form" onSubmit={submitHandler}>
				<h3 className="mb-3">Авторизация</h3>
				<div className="wrapper wrapper-col pt-1 pb-1 ">
					<div className="auth-input-block wrapper wrapper-v-center">
						<label className="auth-title">Логин:</label>
						<input 
							onChange={inputLoginHandler}
							className="auth-input" 
							type="text"
							value={login}
						/>
					</div>
					<div className="auth-input-block wrapper wrapper-v-center">
						<label className="auth-title">Пароль:</label>
						<input
							onChange={inputPasswordHandler}
							className="auth-input" 
							type="password"
							value={password}
						/>
					</div>	
				</div>				
				<div className="center-block">
					<button type="submit" class="btn btn-primary auth-button">Войти</button>
				</div>
			</form>
		</div>
	);
}

const mapDispatchToProps = dispatch => {
    return {
        logIN: data => dispatch(auth(data))
    };
};
const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);