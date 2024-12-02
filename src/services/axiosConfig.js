import axios from 'axios';

const api = axios.create({
  baseURL: 'https://easypark-back.onrender.com/easypark', //ROTA PARA O RENDER DO BACK
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;