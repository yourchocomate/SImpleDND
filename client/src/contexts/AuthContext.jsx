import { useContext } from "react";
import { createContext } from "react";
import { useProvideAuth } from "../hooks";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value = {auth}>{children}</AuthContext.Provider>
}

export default AuthContext;