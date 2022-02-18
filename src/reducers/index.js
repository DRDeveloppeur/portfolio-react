import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import logReducer from './logReducer';

export default combineReducers({
    todoReducer,
    logReducer
})