import {
	GET_MESSAGES,
    ADD_MESSAGE,
} from '../constants/MessageConstants'


export const addMessage = (message) => {

  return dispatch => {
    addNewMessage(message, dispatch);
  }
  
}

const addNewMessage = (data, dispatch) => {
  dispatch({ type: ADD_MESSAGE, data});
}