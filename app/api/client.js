import {create} from 'apisauce'
import cache from '../util/cache.js'

const apiClient = create({
    baseURL: "http://192.168.100.3:9000/api"
})

const get = apiClient.get

apiClient.get = (url, params, axiosConfig)=>{

    return new Promise((resolve, reject)=>{

        get(url, params, axiosConfig)
        .then((response)=>{

            if(response && response.ok){
                cache.store(url, response.data)
                resolve(response)
            }else{
                cache.get(url)
                .then((data)=>{

                    resolve (data ? {
                        ok: true,
                        data
                    } : response)

                })
            }

        })

    })

    

    

    

}

export default apiClient