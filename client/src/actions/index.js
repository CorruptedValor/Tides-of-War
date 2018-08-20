import axios from 'axios';
import { FETCH_USER, FETCH_PLAYER, FETCH_ALL_PLAYERS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type:FETCH_USER, payload: res });
};

export const playerSubmit = (values) => {
    return {
        promise: axios.post('/api/player/add', values),
        type: FETCH_PLAYER
    } 
};

// export const playerSubmit = (values) => {
//     return axios.post('/api/player/add', values)
//         .then( (response) => {
//             dispatch ({ type: FETCH_PLAYER, payload: response.data })
//             return response.data;
//         } 
//     );
// };

export const fetchAllPlayers = () => async dispatch => {
    const res = await axios.get('/api/player/all');
   
    dispatch({ type: FETCH_ALL_PLAYERS, payload: res.data });
};