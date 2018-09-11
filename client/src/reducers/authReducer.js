//import { FETCH_USER } from '../actions/types';

export default function (state = null, action) {    
    switch (action.type) {
        case "FETCH_USER_PENDING":
            return {
                ...state,
                fetching: true,
                auth: false
            }
        case "FETCH_USER_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.payload,
                auth: false
            }
        case "FETCH_USER_FULFILLED":
            console.log('returned');            
            return {
                ...state,
                fetching: false,
                fetched: true,
                auth: action.payload.data || false
            }
        default:
            return state;
    }
};