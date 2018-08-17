import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    
    dispatch({ type:FETCH_USER, payload: res });
};

export const playerSubmit = (values) => async dispatch => {
    const res = await axios.post('/api/player/add', values);

    dispatch({ type: FETCH_USER, payload: res.data });
}