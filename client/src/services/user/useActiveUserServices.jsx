import axios from 'axios';
import { logErr } from '../catch.error';

const useTopUsersGet = async() => {
    let response = [];

    try{
        response = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-top-users`,  {
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

const useChartBySegmentation = async(segmentation) => {
    let response = [];

    try{
        response = await axios.get(`${import.meta.env.VITE_API_URL}/api/get-active-users-by-${segmentation}`,  {
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

export {  useChartBySegmentation, useTopUsersGet };