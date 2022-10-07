import Axios from 'axios'


const BASE_URL="http://localhost:3000/api"

export const publicRequest= Axios.create({
 baseURL: BASE_URL
})


export const userRequest= Axios.create({
    baseURL: BASE_URL,
   })

   userRequest.interceptors.request.use(
    config => {
      const token = localStorage.getItem('x-auth-token')

      if (token) {
        config.headers.token = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );
