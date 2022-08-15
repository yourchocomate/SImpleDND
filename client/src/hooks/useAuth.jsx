import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts";
import { useAuthLogin, useAuthRegister, useAuthVerify } from "../services/auth";

export const useProvideAuth = () => {
    const [user, setUser] = useState(false);

    const login = async(data, handleSuccess, handleFailure) => {
        const res = await useAuthLogin(data);
        if(res && res.data) {

            if(res.data.success) {

                setUser(res.data.data);
                localStorage.setItem('token', res.data.token);
                return handleSuccess(res.data.message);

            } else return handleFailure(res.data.message);

        } else return handleFailure("Something went wrong");
    };
    const register = async(data, handleSuccess, handleFailure) => {
        const res = await useAuthRegister(data);
        if(res && res.data) {

            if(res.data.success) {

                setUser(res.data.data);
                localStorage.setItem('token', res.data.token);
                return handleSuccess(res.data.message);

            } else return handleFailure(res.data.message);

        } else return handleFailure("Something went wrong");
    };

    const logout = async() => {
        localStorage.clear();
        return setUser(false);
    };
    
    useEffect(() => {

        let isActive = true;
        if(!user && isActive) verify();

        return () => isActive = false;

    }, []);

    const verify = async() => {
        if(!user)
        {
            const token = localStorage.getItem('token');
            if(token) {
                useAuthVerify(token).then(user => {
                    if (user && user.data) setUser(user.data);
                    else setUser(false);
                });
            }
        }
    }

    return { user, login, register, logout};
}

export const useAuth = () => {
    return useContext(AuthContext);
}