import {create} from 'apisauce'
import cache from '../util/cache.js'
import firebase from './firebase'

const db = firebase.firestore()

const apiClient = create({
    baseURL: "http://192.168.100.3:9000/api"
})



apiClient.get = async (url)=>{

    try {

        const docs = []

        const snapShot = await db.collection("listings").get()
        snapShot.forEach((doc)=>{
            docs.push({
                id: doc.id,
                ...doc.data()
            })
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