import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (payload) => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    const value = {
        isLoggedIn,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

const useAuth = () => {
    const value = useContext(AuthContext);

    if (value === undefined) {
        throw new Error("Non sei dentro all' Auth Provider");
    }

    return value;
};

export { AuthProvider, useAuth };
