import {AUTH, GET_LOCATION} from '../actions/types.js';
const initialState = {
	setedLogin: "Admin",
	setedPassword: "Admin",
	isAuth: true
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
		case GET_LOCATION:
			const getLocation = action.payload;
			return {...state, getLocation: getLocation}
		default:
			return state;
	}
}