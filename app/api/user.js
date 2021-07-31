import firebase from 'firebase'

const auth = firebase.auth()
const db = firebase.firestore()

const signIn = async (email, password)=>{

    try {

        const userCredential = await auth.signInWithEmailAndPassword(email, password)
        
        const userObj = await db.collection('users').doc(userCredential.user.uid).get()

        return userObj
        

    } catch (error) {
        throw error
    }

}

const signUp = async (email, password)=>{

    try {
        
        const userCredential = await auth.createUserWithEmailAndPassword(email, password)

        const verifyEmail = await auth.currentUser.sendEmailVerification()

        return "Please check your mail to activate your account."

        // console.log(userCredential);


    } catch (error) {
        console.log(error);
        throw error
    }

}

const addUser = async ()=>{

    try {

        const userCredential = auth.currentUser.providerData[0]

        console.log(userCredential);
        
        // const response = await db.collection('users').doc(userCredential.user.uid).set({

        //         ...userCredential.user,
        //         listingsCount: 0,
        //         favorites: [],
        //         messages: []

        // })

        // return response

    } catch (error) {
        
    }

}

export default {
    addUser,
    signIn,
    signUp
}