
import { combineReducers } from 'redux';


export function butts (state = null, action) {
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload.data || false;
        default:
            return state;
    }
};


export default combineReducers({
    butts: butts,
});