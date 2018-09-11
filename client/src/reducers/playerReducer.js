//import { FETCH_PLAYER } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {               
        case "FETCH_PLAYER_FULFILLED":
            return action.payload;
        default:
            return state;
    }
}