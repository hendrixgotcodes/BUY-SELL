import { useContext } from "react";
import { User } from "../types";

import AuthContext from "./context";
import authStorage from "./storage";

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logOut = () => {
        authStorage.removeToken();

        setUser(null);
    };

    const logIn = (user: User) => {
        setUser(user);
        authStorage.storeToken(user);
    };

    return { user, setUser, logOut, logIn };
};

export default useAuth;
