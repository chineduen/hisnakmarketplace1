# Frontend-Backend Integration Examples

## React with Express.js

### Login Component
```jsx
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await login(credentials);
      if (result.success) {
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};
```

## Vue.js with Django

### Product List Component
```vue
<template>
  <div class="products">
    <div v-if="loading" class="loading">Loading products...</div>
    <div v-else class="product-grid">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="product-card"
      >
        <img :src="product.image_url" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.price }}</p>
        <button @click="generateAffiliateLink(product.id)">
          Get Affiliate Link
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { productsAPI, affiliatesAPI } from '../services/api';

export default {
  name: 'ProductList',
  setup() {
    const products = ref([]);
    const loading = ref(true);

    const fetchProducts = async () => {
      try {
        const response = await productsAPI.getAll();
        products.value = response.data.data;
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        loading.value = false;
      }
    };

    const generateAffiliateLink = async (productId) => {
      try {
        const response = await affiliatesAPI.generateLink(productId);
        const link = response.data.data.link;
        navigator.clipboard.writeText(link);
        alert('Affiliate link copied to clipboard!');
      } catch (error) {
        alert('Failed to generate affiliate link');
      }
    };

    onMounted(fetchProducts);

    return {
      products,
      loading,
      generateAffiliateLink
    };
  }
};
</script>
```

## Vanilla HTML with FastAPI

### Dashboard Page
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Affiliate Dashboard - Hisnak Marketplace</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <header>
            <h1>Affiliate Dashboard</h1>
            <button onclick="logout()">Logout</button>
        </header>
        
        <main>
            <div class="stats-grid">
                <div class="stat-card">
                    <h3>Total Earnings</h3>
                    <p id="total-earnings">Loading...</p>
                </div>
                <div class="stat-card">
                    <h3>This Month</h3>
                    <p id="month-earnings">Loading...</p>
                </div>
                <div class="stat-card">
                    <h3>Total Clicks</h3>
                    <p id="total-clicks">Loading...</p>
                </div>
                <div class="stat-card">
                    <h3>Conversion Rate</h3>
                    <p id="conversion-rate">Loading...</p>
                </div>
            </div>
            
            <div class="recent-activity">
                <h2>Recent Activity</h2>
                <div id="activity-list">Loading...</div>
            </div>
        </main>
    </div>

    <script src="js/api.js"></script>
    <script>
        // Check authentication
        if (!localStorage.getItem('token')) {
            window.location.href = '/login.html';
        }

        // Load dashboard data
        async function loadDashboard() {
            try {
                const response = await api.getAffiliateDashboard();
                const data = response.data;
                
                document.getElementById('total-earnings').textContent = `₦${data.totalEarnings.toLocaleString()}`;
                document.getElementById('month-earnings').textContent = `₦${data.monthEarnings.toLocaleString()}`;
                document.getElementById('total-clicks').textContent = data.totalClicks.toLocaleString();
                document.getElementById('conversion-rate').textContent = `${data.conversionRate}%`;
                
                // Load recent activity
                const activityList = document.getElementById('activity-list');
                activityList.innerHTML = data.recentActivity.map(activity => `
                    <div class="activity-item">
                        <span class="activity-type">${activity.type}</span>
                        <span class="activity-description">${activity.description}</span>
                        <span class="activity-date">${new Date(activity.date).toLocaleDateString()}</span>
                    </div>
                `).join('');
                
            } catch (error) {
                console.error('Failed to load dashboard:', error);
                alert('Failed to load dashboard data');
            }
        }

        function logout() {
            api.logout();
            window.location.href = '/login.html';
        }

        // Load data when page loads
        document.addEventListener('DOMContentLoaded', loadDashboard);
    </script>
</body>
</html>
```

## Payment Integration

### Stripe Payment (React)
```jsx
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutForm = ({ amount, productId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    try {
      // Create payment intent
      const response = await paymentsAPI.process({
        amount,
        productId,
        paymentMethod: 'stripe'
      });

      const { clientSecret } = response.data.data;

      // Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        }
      });

      if (result.error) {
        alert(result.error.message);
      } else {
        alert('Payment successful!');
        // Redirect to success page
      }
    } catch (error) {
      alert('Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : `Pay ₦${amount}`}
      </button>
    </form>
  );
};

const PaymentPage = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm amount={20000} productId="product-123" />
  </Elements>
);
```

### Paystack Payment (Vue.js)
```vue
<template>
  <div class="payment-form">
    <button @click="payWithPaystack" :disabled="loading">
      {{ loading ? 'Processing...' : `Pay ₦${amount}` }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['amount', 'productId'],
  data() {
    return {
      loading: false
    };
  },
  methods: {
    payWithPaystack() {
      this.loading = true;
      
      const handler = PaystackPop.setup({
        key: process.env.VUE_APP_PAYSTACK_PUBLIC_KEY,
        email: this.$store.state.user.email,
        amount: this.amount * 100, // Convert to kobo
        currency: 'NGN',
        callback: (response) => {
          this.verifyPayment(response.reference);
        },
        onClose: () => {
          this.loading = false;
        }
      });
      
      handler.openIframe();
    },
    
    async verifyPayment(reference) {
      try {
        const response = await paymentsAPI.process({
          reference,
          productId: this.productId,
          paymentMethod: 'paystack'
        });
        
        if (response.data.success) {
          this.$router.push('/payment-success');
        } else {
          alert('Payment verification failed');
        }
      } catch (error) {
        alert('Payment verification failed');
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
```

## Real-time Features with WebSocket

### Express.js WebSocket Server
```javascript
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');

const setupWebSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true
    }
  });

  // Authentication middleware
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.userId = decoded.userId;
      next();
    } catch (err) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket) => {
    console.log(`User ${socket.userId} connected`);
    
    // Join user-specific room
    socket.join(`user_${socket.userId}`);
    
    // Handle affiliate link clicks
    socket.on('affiliate_click', (data) => {
      // Broadcast to affiliate
      io.to(`user_${data.affiliateId}`).emit('new_click', {
        productId: data.productId,
        timestamp: new Date()
      });
    });
    
    // Handle new sales
    socket.on('new_sale', (data) => {
      // Notify affiliate
      io.to(`user_${data.affiliateId}`).emit('new_commission', {
        amount: data.commission,
        productId: data.productId,
        timestamp: new Date()
      });
      
      // Notify vendor
      io.to(`user_${data.vendorId}`).emit('new_sale', {
        amount: data.amount,
        productId: data.productId,
        timestamp: new Date()
      });
    });
    
    socket.on('disconnect', () => {
      console.log(`User ${socket.userId} disconnected`);
    });
  });

  return io;
};

module.exports = setupWebSocket;
```

### React WebSocket Client
```jsx
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useAuth } from './useAuth';

export const useWebSocket = () => {
  const [socket, setSocket] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const newSocket = io(process.env.REACT_APP_WS_URL, {
        auth: {
          token: localStorage.getItem('token')
        }
      });

      newSocket.on('new_click', (data) => {
        setNotifications(prev => [...prev, {
          type: 'click',
          message: 'New click on your affiliate link!',
          data,
          timestamp: new Date()
        }]);
      });

      newSocket.on('new_commission', (data) => {
        setNotifications(prev => [...prev, {
          type: 'commission',
          message: `New commission: ₦${data.amount}`,
          data,
          timestamp: new Date()
        }]);
      });

      newSocket.on('new_sale', (data) => {
        setNotifications(prev => [...prev, {
          type: 'sale',
          message: `New sale: ₦${data.amount}`,
          data,
          timestamp: new Date()
        }]);
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    }
  }, [user]);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return {
    socket,
    notifications,
    clearNotifications
  };
};
```