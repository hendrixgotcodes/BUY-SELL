import { create } from "apisauce";
import ListingItemServer from "../types/entities";

import cache from "../util/cache";
import firebase from "./firebase";

const db = firebase.firestore();

const apiClient = create({
    baseURL: "http://192.168.100.3:9000/api",
});

apiClient.get = async (url) => {
    try {
        const listings: ListingItemServer[] = [];

        const snapShot = await db.collection("listings").get();
        snapShot.forEach((doc) => {
            listings.push({
                ...(doc.data() as ListingItemServer),
                id: doc.id,
            });
        });

        cache.store(url, listings);

        return {
            ok: true,
            data: listings,
        };
    } catch (error) {
        const cachedData = await cache.get(url);
        return cachedData
            ? {
                  ok: true,
                  cachedData,
              }
            : {
                  ok: false,
                  data: null,
              };
    }
};

export default apiClient;
