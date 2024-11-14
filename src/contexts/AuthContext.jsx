import { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
        if (storedIsLoggedIn !== null && storedIsLoggedIn === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
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
