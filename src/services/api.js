import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fa105838.ngrok.io'
});

export default api;