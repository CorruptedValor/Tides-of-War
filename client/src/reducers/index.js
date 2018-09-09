import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import playerReducer from './playerReducer';
import playerListReducer from './playerListReducer';

export default combineReducers({
    user: authReducer,
    form: reduxForm,
    player: playerReducer,
    playerList: playerListReducer
});