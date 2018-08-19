import axios from 'axios';
import { FETCH_USER, FETCH_PLAYER, FETCH_ALL_PLAYERS } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type:FETCH_USER, payload: res });
};

// export const playerSubmit = (values) => async dispatch => {
//     const res = await axios.post('/api/player/add', values);

//     dispatch({ type: FETCH_PLAYER, payload: res.data });
// }

export const playerSubmit = (values) => dispatch => {
    return axios.post('/api/player/add', values)
            .then( (response) => {
                dispatch ({ type: FETCH_ALL_PLAYERS, payload: response.data })
                return response.data;
            } 
        );
};

export const fetchAllPlayers = () => async dispatch => {
    const res = await axios.get('/api/player/all');
   
    dispatch({ type: FETCH_ALL_PLAYERS, payload: res.data });
};