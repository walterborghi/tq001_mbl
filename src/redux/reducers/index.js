import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import MessageReducer from './MessageReducer'

export default combineReducers({
	HomeReducer : HomeReducer,
	MessageReducer: MessageReducer,
});