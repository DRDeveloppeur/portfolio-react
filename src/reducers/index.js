import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import authReducer from './authReducer';

export default combineReducers({
    projectsReducer,
    authReducer
})