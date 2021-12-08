import firebase from './firebase'
import userInfo from './userInfo'

const auth = firebase.auth()
const db = firebase.firestore()


const getCurrentUser = ()=>{
        
    return auth.currentUser

}

const login = async (email, password)=>{

    try {

        await auth.signInWithEmailAndPassword(email, password)
        const response = await db.collection("users").doc(auth.currentUser.uid).get()

        userInfo.set(response.data())

        return {
            ...response.data(),
            uid: auth.currentUser.uid
        }

    } catch (error) {

        switch(error.code){

            case "auth/invalid-password": 
                throw new Error("Invalid password")
                break
            case "auth/invalid-email":
                throw new Error("Your email is invalid")
                break
            case "auth/wrong-password":
                throw new Error("Incorrect password")
                break
            case "auth/user-not-found":
                throw new Error("It appears you have no account with us. Please try sign up.")
            default: 
                console.log(error);
                throw new Error("An unknown error occured")

        }


    }

}

const logOut = async ()=>{

    try {
        
        await auth.signOut()
        userInfo.reset()

    } catch (error) {
        throw error
    }

}

const register = async (email, password)=>{

    try {

        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        return user

    } catch (error) {

        switch(error.code){

            case "auth/invalid-password": 
                throw new Error("Invalid password")
                break
            case "auth/email-already-in-use":
                throw new Error("Email already existes")
                break
            case "auth/wrong-password":
                throw new Error("Incorrect password")
                break
            case "auth/user-not-found":
                throw new Error("It appears you have no account with us. Please try sign up.")
            default: 
                console.log(error);
                throw new Error("An unknown error occured")

        }



    }

}

export default {
    getCurrentUser,
    login,
    logOut,
    register
}