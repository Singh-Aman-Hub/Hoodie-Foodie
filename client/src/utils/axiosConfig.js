import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // alert("I was here")
  console.log(token);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  // console.log( "Token sent successfully -"+config.headers['Authorization']);
  return config;
});

export default instance;


