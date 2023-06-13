import axios from 'axios'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_END_POINT,
    timeout: 60000,
    params: {} // do not remove this, its added to add params later in the config
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    config => {
        const xAuthToken = sessionStorage.getItem('userId') ? sessionStorage.getItem('userId') : '';
        console.log(xAuthToken)
        config.headers['Accept'] = 'application/json';
        config.headers['x-auth-token'] = xAuthToken;
        return config;
    },
    error => {
        Promise.reject(error)
    });


export { axiosClient }