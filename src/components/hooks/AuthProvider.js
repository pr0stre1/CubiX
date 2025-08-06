import {useContext, createContext, useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const mountedRef = useRef();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || "");
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const navigate = useNavigate();

    useEffect(() => {
        if (mountedRef.current) {
            navigate("/");
        }

    }, [user, token, navigate]);

    useEffect(() => {
        mountedRef.current = true;
    }, []);

    const loginAction = async (data) => {
        try {
            let res = {
                data: data,
                token: 'test_token',
            };

            if (process.env.REACT_APP_DEBUG !== "True") {
                const response = await fetch("your-api-endpoint/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                res = await response.json();
            }

            if (res) {
                setUser(res.data);
                setToken(res.token);
                localStorage.setItem("token", res.token);
                localStorage.setItem("user", JSON.stringify(res.data));
                return;
            }
            throw new Error(res.message);
        } catch (err) {
            console.error(err);
        }
    };

    const registerAction = async (data) => {
        try {
            let res = {
                data: data,
                token: 'test_token',
            };

            if (process.env.REACT_APP_DEBUG !== "True") {
                const response = await fetch("your-api-endpoint/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                res = await response.json();
            }

            if (res) {
                setUser(res.data);
                setToken(res.token);
                localStorage.setItem("token", res.token);
                localStorage.setItem("user", JSON.stringify(res.data));
                return;
            }
            throw new Error(res.message);
        } catch (err) {
            console.error(err);
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut, registerAction }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};