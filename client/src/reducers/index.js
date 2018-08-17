import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import playerReducer from './playerReducer';


export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    players: playerReducer
});