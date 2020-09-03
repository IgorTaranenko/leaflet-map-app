import {AUTH} from './types.js';
export const auth = (data) => {
	return {
		type: AUTH,
		payload: data,
	}
}
