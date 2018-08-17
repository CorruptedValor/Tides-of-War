import axios from 'axios';
import { FETCH_USER, FETCH_PLAYERS } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    // console.log(res);

    dispatch({ type:FETCH_USER, payload: res });
};

export const playerSubmit = (values) => async dispatch => {
    const res = await axios.post('/api/player/add', values);

    dispatch({ type: FETCH_PLAYERS, payload: res.data });
}

export const fetchPlayers = () => async dispatch => {
    const res = await axios.get('/api/player/all');
    // console.log(res);

    dispatch({ type: FETCH_PLAYERS, payload: res.data });
};