import client from './client'
import firebase from './firebase'
import pushMedia from './pushMedia'



//Fields
const endPoint = "/listings"
const db = firebase.firestore()


const getListings = ()=>{
    return new Promise((resolve, reject)=>{

        client.get(endPoint)
        .then((result)=>{

            resolve(result);
        })

    })
}



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

const addListing =  async (listings, onUploadProgress, user)=>{

    const promises = []
    const imageURLs = []

    const filePath = `images/${user.uid}/`

    let totalImages = listings.images.length
    let totalProgress = 0

    const uploadProgress = (progress, index)=>{

        totalProgress += (parseFloat(progress))

        // console.log(`index: ${index} \t`, `progress: ${progress}\t`, `totalImages: ${totalImages}`);
        // console.log(progress);
        

    }

    

    for(let index=0; index < listings.images.length; index++){

        const fileName = `img_${index}`
        const image = listings.images[index]

        
        const url = await pushMedia(fileName, filePath, image, (progress)=>(uploadProgress(progress, index)))
        imageURLs.push(url)

    }

    Promise.all(imageURLs)
    .then(async (result)=>{

        listings.images = result

        listings = {
            ...listings,
            seller: user
        }

        const response = await db.collection("listings").doc(`${user.uid}_${listings.title}`).set(listings)

    })

    return{
        ok: true
    }


    


}

export default {
    addListing,
    getListings
}