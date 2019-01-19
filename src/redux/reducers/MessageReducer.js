import {
    GET_MESSAGES,
    ADD_MESSAGE,
} from '../constants/MessageConstants'

import { Alert } from 'react-native'


const INITIAL_STATE = {
    messages: [],
}


export default (state = INITIAL_STATE, action) => {

	switch(action.type)
	{
		case ADD_MESSAGE:
            
            var arr = new Array();
            arr.push(action.data);

           
            return {
                ...state,
                messages: arr.concat(state.messages),//state.messages.concat(action.data),
            }
		
	}
	return state;
}