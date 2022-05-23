// api/axiosClient.js
import axios from 'axios';
const axiosClient = axios.create({
  baseURL: 'https://628b0b807886bbbb37af2cfb.mockapi.io/api',
  headers: {
    'content-type': 'application/json',
  },
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
})
axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}, (error) => {
  // Handle errors
  throw error;
});
export default axiosClient;