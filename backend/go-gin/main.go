package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"hisnak-marketplace/config"
	"hisnak-marketplace/middleware"
	"hisnak-marketplace/routes"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	// Initialize database
	config.InitDB()

	// Set Gin mode
	if os.Getenv("GIN_MODE") == "release" {
		gin.SetMode(gin.ReleaseMode)
	}

	// Create Gin router
	r := gin.Default()

	// Middleware
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000", "https://hisnak.com"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	r.Use(middleware.RateLimit())
	r.Use(middleware.Logger())
	r.Use(middleware.ErrorHandler())

	// Health check
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "OK",
			"message": "Hisnak Marketplace API is running",
		})
	})

	// API routes
	api := r.Group("/api/v1")
	{
		routes.AuthRoutes(api)
		routes.UserRoutes(api)
		routes.ProductRoutes(api)
		routes.AffiliateRoutes(api)
		routes.VendorRoutes(api)
		routes.OrderRoutes(api)
		routes.PaymentRoutes(api)
		routes.AnalyticsRoutes(api)
	}

	// Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}