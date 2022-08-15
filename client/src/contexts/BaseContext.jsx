import { createContext } from "react";
import { useProvideBase } from "../hooks";

const BaseContext = createContext();

export const BaseProvider = ({children}) => {
    const hook = useProvideBase();
    return <BaseContext.Provider value = {hook}>{children}</BaseContext.Provider>
}

export default BaseContext;