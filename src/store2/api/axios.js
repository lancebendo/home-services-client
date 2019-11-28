import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_HOST || 'lhttps://localhost:3000',
});
