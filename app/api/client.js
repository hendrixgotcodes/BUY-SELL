import {create} from 'apisauce'

const apiClient = create({
    baseURL: "http://192.168.100.3:9000/api"
})

export default apiClient