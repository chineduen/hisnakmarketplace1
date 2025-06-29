from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
import uvicorn
import os

from database import get_db, engine
from models import Base
from routers import auth, users, products, affiliates, vendors, orders, payments, analytics
from middleware.rate_limit import RateLimitMiddleware
from middleware.logging import LoggingMiddleware

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Hisnak Marketplace API",
    description="AI-powered affiliate networking marketplace",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Security
security = HTTPBearer()

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://hisnak.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=["localhost", "127.0.0.1", "*.hisnak.com"]
)

app.add_middleware(RateLimitMiddleware)
app.add_middleware(LoggingMiddleware)

# Health check
@app.get("/health")
async def health_check():
    return {"status": "OK", "message": "Hisnak Marketplace API is running"}

# Include routers
app.include_router(auth.router, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(users.router, prefix="/api/v1/users", tags=["Users"])
app.include_router(products.router, prefix="/api/v1/products", tags=["Products"])
app.include_router(affiliates.router, prefix="/api/v1/affiliates", tags=["Affiliates"])
app.include_router(vendors.router, prefix="/api/v1/vendors", tags=["Vendors"])
app.include_router(orders.router, prefix="/api/v1/orders", tags=["Orders"])
app.include_router(payments.router, prefix="/api/v1/payments", tags=["Payments"])
app.include_router(analytics.router, prefix="/api/v1/analytics", tags=["Analytics"])

# Global exception handler
@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return {
        "success": False,
        "message": exc.detail,
        "status_code": exc.status_code
    }

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=int(os.getenv("PORT", 8000)),
        reload=os.getenv("ENVIRONMENT") == "development"
    )