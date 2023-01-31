import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://chatbot-rocketseat-api-production.up.railway.app/'
});