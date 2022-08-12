import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async<T> (authToken: T) => {
    const stringified = JSON.stringify(authToken);

    try {
        await SecureStore.setItemAsync(key, stringified);
        return;
    } catch (error) {
        console.log(error, "**************************");
    }
};

const getToken = async () => {
    try {
        let authToken = await SecureStore.getItemAsync(key);
        if(authToken){
            authToken = JSON.parse(authToken);
            return authToken;
        }
    } catch (error) {
        console.log(error);
    }
};

const getUser = async () => {
    const token = await getToken();
    return token || null;
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
        return;
    } catch (error) {
        console.log(error);
    }
};

export default { storeToken, getToken, getUser, removeToken };
