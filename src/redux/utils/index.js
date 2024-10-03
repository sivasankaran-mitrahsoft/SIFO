import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',  // Replace with your API base URL
  timeout: 10000,  // Request timeout in milliseconds
});

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Example: Add Authorization token to every request
    const token = localStorage.getItem('token'); // Get token from local storage or other source
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the request error here
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => {
    // You can process the response here before sending it back
    return response;
  },
  (error) => {
    // Handle specific response errors (e.g., token expiration, network issues)
    if (error.response && error.response.status === 401) {
      // Unauthorized error (e.g., token expired)
      console.log('Token expired or unauthorized');
      // You might want to log the user out or refresh the token here
    }
    return Promise.reject(error);
  }
);

export default api;
