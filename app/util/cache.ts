import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const prefix = "cache";
const expiryInMinutes = 5;

const store = <T, U>(key: T, value: U) => {
    const item = {
        value,
        timeStamp: Date.now(),
    };

    AsyncStorage.setItem(prefix + key, JSON.stringify(item)).catch((error) => {
        console.log(error);
    });

    // try {

    //     AsyncStorage.setItem(prefix + key, JSON.stringify(item) )

    // } catch (error) {
    //     console.log(error);
    // }
};

const get = <T>(key:T) =>
    new Promise((resolve, reject) => {
        AsyncStorage.getItem(prefix + key)
            .then((value) => {
                if(value){
                    const item = JSON.parse(value);

                    if (!item) {
                        resolve(null);
                    } else if (isExpired(item)) {
                        AsyncStorage.removeItem(prefix + key).then(() => {
                            resolve(null);
                        });
                    } else {
                        resolve(item.value);
                    }
                }
            })
            .catch((error) => {
                console.log(error);

                reject(error);
            });
    });

/**
 * TODO: Better find better type
 */
const isExpired = (item:any) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timeStamp);

    return now.diff(storedTime, "minutes") > expiryInMinutes;
};

export default {
    store,
    get,
};
