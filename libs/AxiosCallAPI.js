// First we need to import Axios.js
import axios from 'axios';
// Next we make an 'instance' of it
const Axios = axios.create({
// .. where we make our configurations
    baseURL: 'https://api.example.com'
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
    axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.interceptors.request.use(request => {
        console.log(request);
        // Edit request config
        return request;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

    axios.interceptors.response.use(response => {
        console.log(response);
        // Edit response config
        return response;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

export default instance;