import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://pets-api-team1.onrender.com/api/',
  baseURL: 'https://pets-api-team1.onrender.com/api/',
});

export default instance;
