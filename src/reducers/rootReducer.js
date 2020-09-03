import {AUTH} from '../actions/types.js';
const initialState = {
	setedLogin: "Admin",
	setedPassword: "Admin",
	isAuth: false
};
export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH:
			const {login, password} = action.payload;
			const {setedLogin, setedPassword} = state;
			let isAuth = null;
			if (setedLogin === login && setedPassword === password) {
				isAuth = true;
			} else {
				isAuth = false;
			}
			return {...state, isAuth: isAuth};
		default:
			return state;
	}
}