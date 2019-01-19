import {
    GET_DATA,
    GET_DATA_RECEIVED,
    GET_DATA_STARTED,
    GET_COBRANCA,
    GET_COBRANCA_RECEIVED,
    GET_COBRANCA_STARTED,
    SET_COBRANCA,
    GET_PROCESS,
    GET_PROCESS_RECEIVED,
    GET_PROCESS_STARTED
} from '../constants/HomeConstants'

import { Alert } from 'react-native'


const INITIAL_STATE = {
    loading: false,
    userData: null,
    user_id: 0,
    selectedCobranca: null,
    itemDetail: null,
    processFilter: null
}


export default (state = INITIAL_STATE, action) => {

	switch(action.type)
	{
		case GET_DATA_STARTED:
            return {
                ...state,
                user_id: action.data,
                userData: [],
                loading: true
            }
        case GET_DATA_RECEIVED:

            console.log('>>>>>>> data received');

            return {
                ...state,
                loading: false,
                userData: action.data,                
            }
        case GET_PROCESS_STARTED:
            console.log(">>>>> started process");
            console.log(action.data);

            return {
                ...state,
                user_id: action.data,
                processFilter: [],
                loading: true
            }
        case GET_PROCESS_RECEIVED:
            console.log(">>>>> received process");
            console.log(action.data);

            return {
                ...state,
                loading: false,
                processFilter: action.data,                
            }
        case SET_COBRANCA:

            console.log(">>>>> set cobranca");
            console.log(action.data);
            return {
                ...state,
                selectedCobranca: action.data,
            }

		
	}
	return state;
}