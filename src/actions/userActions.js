// src/actions/userActions.js
import api from '../api/api';

export const fetchUsers = () => async (dispatch) => {
    try {
        const response = await api.get('/users');
        console.log('Fetched Users:', response.data); // Debug log
        dispatch({ type: 'FETCH_USERS', payload: response.data });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};
