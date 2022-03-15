import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    //This will hold a boolean to check whether or not the client trusts this device. Default is false
    const [persist, setPersist] = useState(
        JSON.parse(localStorage.getItem('persist')) || false
    );

    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;