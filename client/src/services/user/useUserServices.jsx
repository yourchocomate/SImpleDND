import axios from 'axios';
import { logErr } from '../catch.error';

const useUsersAllByPaginate = async(page) => {
    let response = [];

    try{
        response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users-all`, {page},  {
            headers: {
                ContentType: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

    } catch (err) {
        return logErr(err);
    }
    return response;
}

export { useUsersAllByPaginate };