import { User } from "../types";
import firebase from "./firebase";

const auth = firebase.auth();
const db = firebase.firestore();

const getCurrentUser = () => auth.currentUser;

async function login (email: string, password:string):Promise<User>{
    try {
        await auth.signInWithEmailAndPassword(email, password);
        const response = await db
            .collection("users")
            .doc(auth.currentUser?.uid)
            .get();

        return {
            ...response.data() as User,
            uid: auth.currentUser ? auth.currentUser?.uid : "",
        };
    } catch (error: any) {
        switch (error.code) {
            case "auth/invalid-password":
                throw new Error("Invalid password");
            case "auth/invalid-email":
                throw new Error("Your email is invalid");
            case "auth/wrong-password":
                throw new Error("Incorrect password");
            case "auth/user-not-found":
                throw new Error(
                    "It appears you have no account with us. Please try sign up."
                );
            default:
                throw new Error("An unknown error occurred");
        }
    }
};

const logOut = async () => {
    await auth.signOut();
};

const register = async (email:string, password:string) => {
    try {
        const { user } = await auth.createUserWithEmailAndPassword(
            email,
            password
        );
        return user;
    } catch (error:any) {
        switch (error.code) {
            case "auth/invalid-password":
                throw new Error("Invalid password");
            case "auth/email-already-in-use":
                throw new Error("Email already existes");
            case "auth/wrong-password":
                throw new Error("Incorrect password");
            case "auth/user-not-found":
                throw new Error(
                    "It appears you have no account with us. Please try sign up."
                );
            default:
                throw new Error("An unknown error occured");
        }
    }
};

export default {
    getCurrentUser,
    login,
    logOut,
    register,
};
