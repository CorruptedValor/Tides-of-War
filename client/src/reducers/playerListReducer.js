//import { FETCH_ALL_PLAYERS } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case 'FETCH_ALL_PLAYERS_PENDING':
            return {
                ...state,
                fetching: true,
                auth: false
            }
        case 'FETCH_ALL_PLAYERS_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload,
                auth: false
            }
        case 'FETCH_ALL_PLAYERS_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload.data || false
            }
        default:
            return state;
    }
}