"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { StripeCheckout } from '@/components/payment/stripe-checkout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// Mock product data - replace with actual API call
const mockProducts = {
  'tigs-program': {
    id: 'tigs-program',
    title: 'The Income Generation System (TIGS Program)',
    price: 20000,
    description: 'Complete affiliate networking training program',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing Mastery Course',
    price: 35000,
    description: 'Comprehensive digital marketing training',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
  },
};

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const productId = params.productId as string;
    const foundProduct = mockProducts[productId as keyof typeof mockProducts];
    
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      router.push('/products');
    }
  }, [params.productId, router]);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error);
    // Handle error (show notification, etc.)
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20">
          <div className="text-center">
            <p>Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Payment Successful!</h1>
              <p className="text-xl text-muted-foreground">
                Thank you for your purchase of {product.title}
              </p>
              <p className="text-muted-foreground">
                You will receive an email with access instructions shortly.
              </p>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button asChild>
                <Link href="/dashboard">
                  Go to Dashboard
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/products">
                  Browse More Products
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{product.title}</h3>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                      <Badge className="mt-2">Digital Product</Badge>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <span className="text-2xl font-bold">₦{product.price.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What You'll Get</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Instant access to course materials</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Lifetime access to updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Community access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Email support</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-border rounded-md"
                  required
                />
              </div>

              <StripeCheckout
                amount={product.price}
                productId={product.id}
                productTitle={product.title}
                customerEmail={customerEmail}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}