import Axios from 'axios'


const BASE_URL="localhost:3000/api"

export const publicRequest= Axios.create({
 baseURL: BASE_URL
})
