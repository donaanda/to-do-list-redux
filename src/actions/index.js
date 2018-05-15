import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
//const API_KEY = '?key=c318demouser';
const API_KEY = '?key=csgo8899';

export function getListData() {
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.GET_LIST_DATA,
        payload: response
    }
}

export function addToDoItem(item) {
    const response = axios.post(`${BASE_URL}/todos/${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    }
}