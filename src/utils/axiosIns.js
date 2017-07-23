import axios from 'axios';
import {Message} from 'element-ui';
import store from '../store';

const axiosInstance = axios.create({
  	timeout: 5000           
})

axiosInstance.interceptors.request.use((config) => {
    if(store.getters.token){
    	config.headers['MY-TOKEN'] = store.getters.token;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use((response) => {
    return response;
    // based on response display the error message
    // const res = response.data;
    // console.log(response.data);
    // const error = {message: ''};
    // if (res.code !== 200) {
    //   error.message = 'something bad happened!'
    //   return Promise.reject(error);
    // } else {
    //   return response.data;
    // }
  }, (error) => {
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance;