import axios from 'axios';
import { logErr } from '../catch.error';

const useAuthVerify = async(token) => {

    let response = [];

    try{
        response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/verify`, {token: token}, {
            headers: {
                ContentType: 'application/json'
            }
        });

    } catch (err) {
        return logErr(err);
    }

    return response;
}

const useAuthLogin = async(data) => {
    
    let response = [];

    try{
        response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, data,
        {
            headers: {
                ContentType: 'application/json'
            }
        });

    } catch (err) {
        if(err.response.status != 500) return err.response;
        return logErr(err);
    }

    return response;
}

const useAuthRegister = async(data) => {
    
    let response = [];

    try{
        response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, data,
        {
            headers: {
                ContentType: 'application/json'
            }
        });

    } catch (err) {
        if(err.response.status != 500) return err.response;
        return logErr(err);
    }

    return response;
}

export {useAuthLogin, useAuthVerify, useAuthRegister};