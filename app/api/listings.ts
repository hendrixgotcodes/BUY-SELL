import { ListingItemClient } from "../types/entities";
import client from "./client";
import firebase from "./firebase";
import pushMedia from "./pushMedia";

// Fields
const endPoint = "/listings";
const db = firebase.firestore();

const getListings = () =>
    new Promise((resolve) => {
        client.get(endPoint).then((result) => {
            resolve(result);
        });
    });

// const addListing = (listing, onUploadProgress)=>{

//     const data = new FormData()
//     data.append('title', listing.title)
//     data.append('price', listing.price)
//     data.append('categoryId', listing.category.value)
//     data.append('description', listing.description)

//     listing.images.forEach((image, index)=>{
//         data.append("images", {
//             name: `image${index}`,
//             type: 'image/jpeg',
//             uri: image
//         })
//     })

//     if(listing.location){
//         data.append("location", JSON.stringify(listing.location))
//     }

//     return client.post(endPoint, data, {
//         onUploadProgress: (progress)=> onUploadProgress(progress.loaded/progress.total)
//     })

// }

// eslint-disable-next-line no-unused-vars
const addListing = async (
    listings: ListingItemClient,
    onUploadProgress: (progress: number) => void,
    user: { uid: any }
) => {
    // const promises = [];
    let imageURLs = [];
    const filePath = `images/${user.uid}/`;
    const promises: Promise<{
        url: string;
        thumbnail: string;
    }>[] = [];

    const uploadProgress = (progress: string) => {
        let totalProgress = 0;
        totalProgress += parseFloat(progress);

        // console.log(`index: ${index} \t`, `progress: ${progress}\t`, `totalImages: ${totalImages}`);
        // console.log(progress);
    };

    for (let index = 0; index < listings.images.length; index += 1) {
        const fileName = `img_${index}`;
        const image = listings.images[index];

        promises.push(
            pushMedia(fileName, filePath, image, (progress: string) =>
                uploadProgress(progress)
            )
        );
    }

    imageURLs = await Promise.all(promises);

    Promise.all(imageURLs).then(async (result) => {
        const newListing = {
            ...listings,
            seller: user,
            images: result,
        };

        await db
            .collection("listings")
            .doc(`${user.uid}_${newListing.title}`)
            .set(newListing);
    });

    return {
        ok: true,
    };
};

export default {
    addListing,
    getListings,
};
