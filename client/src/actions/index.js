import axios from 'axios';
import { FETCH_USER, FETCH_PLAYER, FETCH_ALL_PLAYERS, FETCH_MISSION } from './types';

export const fetchUser = () => {
    return {
        payload: axios.get('/api/current_user'),
        type: FETCH_USER
    } 
};

export const missionAdminSubmit = (values) => {
    return {
        payload: axios.post('/api/mission/admin', values),
        type: FETCH_MISSION
    } 
};

export const playerSubmit = (values) => {
    return {
        payload: axios.post('/api/player/add', values),
        type: FETCH_PLAYER
    } 
};

export const fetchAllPlayers = () => {
    return {
        payload: axios.get('/api/player/all'),   
        type: FETCH_ALL_PLAYERS
    }
};