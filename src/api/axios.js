import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Optional: include cookies for auth if needed
});

// Request interceptor: attach token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // or from context
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      // Customize based on status codes
      if (status === 401) {
        console.warn('Unauthorized - Redirect to login');
        // e.g., logout or redirect logic here
      } else if (status === 403) {
        console.warn('Forbidden - No permission');
      } else if (status >= 500) {
        console.error('Server error:', error.response.data);
      }
    } else {
      console.error('Network or CORS error', error);
    }

    return Promise.reject(error);
  }
);

export default api;
