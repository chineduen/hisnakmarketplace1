class APIClient {
  constructor() {
    this.baseURL = 'http://localhost:3001/api/v1';
    this.token = localStorage.getItem('token');
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    if (this.token) {
      config.headers.Authorization = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Request failed');
      }

      return data;
    } catch (error) {
      if (error.message.includes('401')) {
        this.logout();
        window.location.href = '/login.html';
      }
      throw error;
    }
  }

  // Auth methods
  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (response.success) {
      this.token = response.data.token;
      localStorage.setItem('token', this.token);
    }

    return response;
  }

  async register(userData) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });

    if (response.success) {
      this.token = response.data.token;
      localStorage.setItem('token', this.token);
    }

    return response;
  }

  async getProfile() {
    return this.request('/auth/me');
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }

  // Products methods
  async getProducts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/products?${queryString}`);
  }

  async getProduct(id) {
    return this.request(`/products/${id}`);
  }

  async createProduct(data) {
    return this.request('/products', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Affiliates methods
  async getAffiliateDashboard() {
    return this.request('/affiliates/dashboard');
  }

  async generateAffiliateLink(productId) {
    return this.request('/affiliates/links', {
      method: 'POST',
      body: JSON.stringify({ productId }),
    });
  }

  async getCommissions(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/affiliates/commissions?${queryString}`);
  }

  // Orders methods
  async createOrder(data) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getOrders(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`/orders?${queryString}`);
  }

  // Payments methods
  async processPayment(data) {
    return this.request('/payments/process', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

// Create global API instance
window.api = new APIClient();