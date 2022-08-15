import { useState } from "react";
import { useUsersAllByPaginate } from "../services/user";

export const useUser = () => {
    
    const [users, setUsers] = useState([]);

    const getUsersByPagination = async(page = 1) => {
        return useUsersAllByPaginate(page).then((res) => setUsers(res.data.data)).catch((err) => console.log(err.message)); 
    }

    return { getUsersByPagination, users }
}