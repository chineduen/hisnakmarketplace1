# Deployment Guide

## Frontend Deployment

### React/Next.js on Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Environment variables
vercel env add NEXT_PUBLIC_API_URL production
```

### Vue.js on Netlify
```bash
# Build
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Vanilla HTML on AWS S3
```bash
# Install AWS CLI
aws configure

# Sync to S3
aws s3 sync ./dist s3://your-bucket-name --delete

# Enable static website hosting
aws s3 website s3://your-bucket-name --index-document index.html
```

## Backend Deployment

### Express.js on Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### NestJS on Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Create app
heroku create hisnak-api

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set DATABASE_URL=your-db-url

# Deploy
git push heroku main
```

### Django on DigitalOcean App Platform
```yaml
# app.yaml
name: hisnak-django-api
services:
- name: api
  source_dir: /
  github:
    repo: your-username/hisnak-marketplace
    branch: main
  run_command: gunicorn hisnak_marketplace.wsgi:application
  environment_slug: python
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: DEBUG
    value: "False"
  - key: DATABASE_URL
    value: ${db.DATABASE_URL}
databases:
- name: db
  engine: PG
  version: "13"
```

### FastAPI on Google Cloud Run
```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
```

```bash
# Build and deploy
gcloud builds submit --tag gcr.io/PROJECT-ID/hisnak-api
gcloud run deploy --image gcr.io/PROJECT-ID/hisnak-api --platform managed
```

### Go Gin on AWS Lambda
```yaml
# serverless.yml
service: hisnak-api

provider:
  name: aws
  runtime: go1.x
  region: us-east-1

functions:
  api:
    handler: bin/main
    events:
      - http:
          path: /{proxy+}
          method: ANY
          cors: true

package:
  exclude:
    - ./**
  include:
    - ./bin/**
```

## Database Setup

### PostgreSQL on AWS RDS
```bash
# Create RDS instance
aws rds create-db-instance \
  --db-instance-identifier hisnak-db \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --master-username admin \
  --master-user-password your-password \
  --allocated-storage 20
```

### MongoDB Atlas
```bash
# Connect string
mongodb+srv://username:password@cluster.mongodb.net/hisnak_marketplace
```

## Environment Variables

### Frontend (.env)
```
REACT_APP_API_URL=https://api.hisnak.com/v1
REACT_APP_STRIPE_PUBLIC_KEY=pk_live_...
REACT_APP_PAYSTACK_PUBLIC_KEY=pk_live_...
```

### Backend (.env)
```
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://user:pass@host:5432/db
JWT_SECRET=your-jwt-secret
STRIPE_SECRET_KEY=sk_live_...
PAYSTACK_SECRET_KEY=sk_live_...
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=noreply@hisnak.com
EMAIL_PASS=your-email-password
```

## SSL/HTTPS Setup

### Let's Encrypt with Nginx
```nginx
server {
    listen 80;
    server_name api.hisnak.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name api.hisnak.com;
    
    ssl_certificate /etc/letsencrypt/live/api.hisnak.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.hisnak.com/privkey.pem;
    
    location / {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Monitoring & Logging

### PM2 for Node.js
```bash
# Install PM2
npm install -g pm2

# Start application
pm2 start ecosystem.config.js

# Monitor
pm2 monit
```

### Docker Compose for Development
```yaml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:3001/api/v1
  
  backend:
    build: ./backend
    ports:
      - "3001:3001"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/hisnak
    depends_on:
      - db
  
  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=hisnak
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```