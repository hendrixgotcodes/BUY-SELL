import firebase from "firebase";

import userInfo from "./userInfo";

const auth = firebase.auth();
const db = firebase.firestore();

const addFavorite = async (item) => {
        const data = {
            favorites: [],
        };

        const response = await db
            .collection("favorites")
            .doc(auth.currentUser.uid)
            .get();
        const favoritesObject = response.data();

        if (!favoritesObject.favorites) {
            data.favorites.push(item);
            await db
                .collection("favorites")
                .doc(auth.currentUser.uid)
                .set(data);
            return;
        }

        favoritesObject.favorites.push(item);
        await db
            .collection("favorites")
            .doc(auth.currentUser.uid)
            .set(favoritesObject);
        return;

        // console.log(favorites);
};

const addUser = async (firstName, lastName) => {
        await auth.currentUser.sendEmailVerification();

        const reloadUserState = setInterval(async () => {
            await auth.currentUser.reload();

            if (auth.currentUser.emailVerified === true) {
                clearInterval(reloadUserState);

                await auth.currentUser.updateProfile({
                    displayName: `${firstName} ${lastName}`,
                });

                const userCredential = auth.currentUser.providerData[0];

                await db
                    .collection("users")
                    .doc(auth.currentUser.uid)
                    .set({
                        ...userCredential,
                        favorites: [],
                        firstName,
                        lastName,
                        listingsCount: 0,
                        messages: [],
                    });

                userInfo.set();

                return auth.currentUser;
            }
        }, 3000);
};

export default {
    addFavorite,
    addUser,
};
