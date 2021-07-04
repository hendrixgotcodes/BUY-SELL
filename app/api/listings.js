import client from './client'

//Fields
const endPoint = "/listings"

const getListings = ()=>{
    return client.get(endPoint)
}

export default {
    getListings
}