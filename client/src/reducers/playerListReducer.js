import { FETCH_ALL_PLAYERS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case 'FETCH_ALL_PLAYERS_FULFILLED':
            return action.payload;
        default:
            return state;
    }
}