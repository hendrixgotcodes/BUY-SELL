import {create} from 'apisauce'
import cache from '../util/cache.js'
import firebase from './firebase'

const db = firebase.firestore()

const apiClient = create({
    baseURL: "http://192.168.100.3:9000/api"
})

const get = apiClient.get

// apiClient.get = (url, params, axiosConfig)=>{

//     return new Promise((resolve, reject)=>{

//         get(url, params, axiosConfig)
//         .then((response)=>{

//             if(response && response.ok){
//                 cache.store(url, response.data)
//                 resolve(response)
//             }else{
//                 cache.get(url)
//                 .then((data)=>{

//                     resolve (data ? {
//                         ok: true,
//                         data
//                     } : response)

//                 })
//             }

//         })

//     })

    

    

    

// }

apiClient.get = async (url)=>{

    try {

        const docs = []

        const snapShot = await db.collection("listings").get()
        snapShot.forEach((doc)=>{
            docs.push(doc.data())
        })


        cache.store(url, docs)

        return {
            ok: true,
            data: docs
        }
        

    } catch (error) {
       
       const cachedData = await cache.get(url)
       return (
           cachedData ? {
               ok: true,
               data
           } : {
               ok: false,
               data: null
           }
       )

    }
    

}

export default apiClient