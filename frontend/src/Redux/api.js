import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'  // Assuming your backend runs here
});

export default api;
