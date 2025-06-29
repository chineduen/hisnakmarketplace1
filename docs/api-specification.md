# Hisnak Marketplace API Specification

## Base URL
- Development: `http://localhost:3001/api/v1`
- Production: `https://api.hisnak.com/v1`

## Authentication
All authenticated endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <jwt_token>
```

## Common Response Format
```json
{
  "success": boolean,
  "data": object | array | null,
  "message": string,
  "errors": array | null,
  "pagination": {
    "page": number,
    "limit": number,
    "total": number,
    "totalPages": number
  } | null
}
```

## Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Refresh JWT token
- `POST /auth/forgot-password` - Request password reset
- `POST /auth/reset-password` - Reset password
- `GET /auth/verify-email/:token` - Verify email address

### Users
- `GET /users/profile` - Get current user profile
- `PUT /users/profile` - Update user profile
- `GET /users/:id` - Get user by ID (public info)
- `POST /users/upload-avatar` - Upload profile picture
- `GET /users/stats` - Get user statistics

### Products
- `GET /products` - List all products (with filters)
- `GET /products/:id` - Get product details
- `POST /products` - Create new product (vendors only)
- `PUT /products/:id` - Update product (vendor only)
- `DELETE /products/:id` - Delete product (vendor only)
- `GET /products/categories` - Get product categories
- `GET /products/search` - Search products

### Affiliates
- `POST /affiliates/register` - Register as affiliate
- `GET /affiliates/dashboard` - Get affiliate dashboard data
- `GET /affiliates/links` - Get affiliate links
- `POST /affiliates/links` - Generate affiliate link
- `GET /affiliates/commissions` - Get commission history
- `GET /affiliates/referrals` - Get referral network
- `GET /affiliates/performance` - Get performance metrics

### Vendors
- `POST /vendors/register` - Register as vendor
- `GET /vendors/dashboard` - Get vendor dashboard
- `GET /vendors/sales` - Get sales data
- `GET /vendors/products` - Get vendor's products
- `PUT /vendors/settings` - Update vendor settings

### Orders
- `POST /orders` - Create new order
- `GET /orders` - Get user's orders
- `GET /orders/:id` - Get order details
- `PUT /orders/:id/status` - Update order status (vendors)
- `POST /orders/:id/refund` - Request refund

### Payments
- `POST /payments/process` - Process payment
- `GET /payments/methods` - Get payment methods
- `POST /payments/webhooks/stripe` - Stripe webhook
- `POST /payments/webhooks/paystack` - Paystack webhook
- `GET /payments/history` - Get payment history

### Analytics
- `GET /analytics/overview` - Get platform overview
- `GET /analytics/sales` - Get sales analytics
- `GET /analytics/users` - Get user analytics
- `GET /analytics/products` - Get product analytics

### Admin
- `GET /admin/users` - Get all users (admin only)
- `PUT /admin/users/:id/status` - Update user status
- `GET /admin/products/pending` - Get pending product approvals
- `PUT /admin/products/:id/approve` - Approve product
- `GET /admin/reports` - Get admin reports