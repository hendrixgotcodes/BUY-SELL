import firebase from './firebase'

const login = async (email, password)=>{

    try {

        const {user} = await firebase.auth().signInWithEmailAndPassword(email, password)
        return user

    } catch (error) {
        console.log(error.code, "nof pc");

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
                throw new Error("An unknown error occured")

        }

    }

}

const register = async (email, password)=>{

    try {

        const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password)
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
                throw new Error("An unknown error occured")

        }



    }

}

export default {
    login,
    register
}