import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',  // Assuming your backend runs here
    headers: {
        'Content-Type': 'application/json',
    }
});


// Interceptor to add token to requests if it exists in localStorage
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['auth-token'] = `${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
