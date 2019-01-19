import {
	SHOW_LOGIN,
} from '../constants/AppConstants'


const showLogin = (dispatch) => {
	dispatch({ type: SHOW_LOGIN });
}


export const doShowLogin = () => {

	return dispatch => {
		showLogin(dispatch);
	}
	
}