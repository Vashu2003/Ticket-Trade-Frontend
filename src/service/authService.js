import api from '../api/axios';

// Login: expects { username, password }
export const login = (credentials) => api.post('/login', credentials);

// Register: expects { username, password }
export const register = (userData) => api.post('/register', userData);
