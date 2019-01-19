import {
	SHOW_LOGIN,
} from '../constants/AppConstants'

const INITIAL_STATE = {
	showingLogin: false,
}


export default (state = INITIAL_STATE, action) => {

	switch(action.type)
	{
		case SHOW_LOGIN:
			return {
				...state,
				showingLogin: true,
			}
	}

	return state;
}