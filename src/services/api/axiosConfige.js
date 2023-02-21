import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://pets-api-team1.onrender.com/api/',
  baseURL: 'http://localhost:65000/api/',
});

export default instance;
