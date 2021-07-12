import *  as SecureStore from "expo-secure-store"

const key="authToken"

const storeToken = async (authToken) => {

    authToken = JSON.stringify(authToken)

    try {
        const savedToken = await SecureStore.setItemAsync(key, authToken)
        return
    } catch (error) {
        console.log(error, "**************************");
    }

}

const getToken = async ()=>{

    try {
        let authToken=  await SecureStore.getItemAsync(key)
        authToken = JSON.parse(authToken)
        return authToken
    } catch (error) {
        console.log(error);
    }

}

const removeToken = async ()=>{

    try {
        await SecureStore.deleteItemAsync(key)
        return
    } catch (error) {
        console.log(error);
    }

}

export default {storeToken, getToken, removeToken}