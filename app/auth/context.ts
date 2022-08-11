import React from "react";
import { AuthContextType } from "../types";
const AuthContext = React.createContext<AuthContextType>({
    user: {uid: ""},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setUser: ()=>{}
});

export default AuthContext;
