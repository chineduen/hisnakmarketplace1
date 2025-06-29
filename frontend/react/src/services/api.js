import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/v1';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get('/auth/me'),
  refreshToken: () => api.post('/auth/refresh'),
};

// Users API
export const usersAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
  uploadAvatar: (formData) => api.post('/users/upload-avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  getStats: () => api.get('/users/stats'),
};

// Products API
export const productsAPI = {
  getAll: (params) => api.get('/products', { params }),
  getById: (id) => api.get(`/products/${id}`),
  create: (data) => api.post('/products', data),
  update: (id, data) => api.put(`/products/${id}`, data),
  delete: (id) => api.delete(`/products/${id}`),
  getCategories: () => api.get('/products/categories'),
  search: (query) => api.get('/products/search', { params: { q: query } }),
};

// Affiliates API
export const affiliatesAPI = {
  register: () => api.post('/affiliates/register'),
  getDashboard: () => api.get('/affiliates/dashboard'),
  getLinks: () => api.get('/affiliates/links'),
  generateLink: (productId) => api.post('/affiliates/links', { productId }),
  getCommissions: (params) => api.get('/affiliates/commissions', { params }),
  getReferrals: () => api.get('/affiliates/referrals'),
  getPerformance: () => api.get('/affiliates/performance'),
};

// Vendors API
export const vendorsAPI = {
  register: () => api.post('/vendors/register'),
  getDashboard: () => api.get('/vendors/dashboard'),
  getSales: (params) => api.get('/vendors/sales', { params }),
  getProducts: () => api.get('/vendors/products'),
  updateSettings: (data) => api.put('/vendors/settings', data),
};

// Orders API
export const ordersAPI = {
  create: (data) => api.post('/orders', data),
  getAll: (params) => api.get('/orders', { params }),
  getById: (id) => api.get(`/orders/${id}`),
  updateStatus: (id, status) => api.put(`/orders/${id}/status`, { status }),
  requestRefund: (id, reason) => api.post(`/orders/${id}/refund`, { reason }),
};

// Payments API
export const paymentsAPI = {
  process: (data) => api.post('/payments/process', data),
  getMethods: () => api.get('/payments/methods'),
  getHistory: (params) => api.get('/payments/history', { params }),
};

// Analytics API
export const analyticsAPI = {
  getOverview: () => api.get('/analytics/overview'),
  getSales: (params) => api.get('/analytics/sales', { params }),
  getUsers: (params) => api.get('/analytics/users', { params }),
  getProducts: (params) => api.get('/analytics/products', { params }),
};

export default api;