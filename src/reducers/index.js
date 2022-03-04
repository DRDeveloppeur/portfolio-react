import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import imagesUploadedReducer from './imagesUploadedReducer';

export default combineReducers({
    projectsReducer,
    imagesUploadedReducer,
})