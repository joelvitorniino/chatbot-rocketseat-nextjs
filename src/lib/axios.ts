import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://chatbot-rocketseat-api-production.up.railway.app/'
});