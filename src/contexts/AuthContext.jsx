import { createContext, useContext } from "react";
import useStorage from "../components/hooks/useStorage";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useStorage(false, "isLoggedIn");
    const navigate = useNavigate();

    const login = (redirectTo) => {
        setIsLoggedIn(true);
        navigate(redirectTo || "/");
    };

    const logout = () => {
        setIsLoggedIn(false);
        navigate("/login");
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
