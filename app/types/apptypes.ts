import { Dispatch, SetStateAction } from "react";
import { User } from "./entities";


export type AuthContextType={
    user: User|null,
    setUser: Dispatch<SetStateAction<User|null>> | (()=>void)
}