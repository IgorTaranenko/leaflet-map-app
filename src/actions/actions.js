import {AUTH, GET_LOCATION} from './types.js';
export const auth = (data) => {
	return {
		type: AUTH,
		payload: data,
	}
}
export const getLocation = (data) => {
	return {
		type: GET_LOCATION,
		payload: data
	};
}
