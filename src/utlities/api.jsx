import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://admin.easysoft.services/api', // Set your base URL here
});

export default Api;