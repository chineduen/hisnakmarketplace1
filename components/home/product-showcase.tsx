"use client";

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink, MessageCircle, Clock } from 'lucide-react';
import Link from 'next/link';

const featuredProducts = [
  {
    id: 1,
    title: 'The Income Generation System (TIGS Program)',
    category: 'Skill-Based Course',
    price: '₦20,000',
    commission: '50%',
    rating: 4.9,
    reviews: 1250,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    vendor: 'Success Academy',
    featured: true
  },
  {
    id: 2,
    title: 'Digital Marketing Mastery Course',
    category: 'Educational Program',
    price: '₦35,000',
    commission: '40%',
    rating: 4.8,
    reviews: 890,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    vendor: 'Marketing Pro',
    featured: false
  },
  {
    id: 3,
    title: 'Cryptocurrency Trading Blueprint',
    category: 'Information Product',
    price: '₦45,000',
    commission: '45%',
    rating: 4.7,
    reviews: 654,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
    vendor: 'Crypto Experts',
    featured: false
  },
  {
    id: 4,
    title: 'Freelance Success Toolkit',
    category: 'Skill-Based Course',
    price: '₦25,000',
    commission: '50%',
    rating: 4.9,
    reviews: 743,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    vendor: 'Freelancer Hub',
    featured: false
  },
  {
    id: 5,
    title: 'AI Business Automation Suite',
    category: 'App Software',
    price: '₦60,000',
    commission: '35%',
    rating: 4.8,
    reviews: 432,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    vendor: 'Tech Solutions',
    featured: false
  },
  {
    id: 6,
    title: 'Network Marketing Conference 2024',
    category: 'Event Ticket',
    price: '₦15,000',
    commission: '30%',
    rating: 5.0,
    reviews: 321,
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
    vendor: 'Event Masters',
    featured: false
  }
];

export function ProductShowcase() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            Product Stores
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Digital Courses &{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Premium Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover high-quality products from verified vendors with attractive 
            commission structures designed for affiliate success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-background/60 backdrop-blur-sm">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.featured && (
                    <Badge className="absolute top-3 left-3 gradient-bg text-white border-none">
                      Featured
                    </Badge>
                  )}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm"
                  >
                    {product.commission} Commission
                  </Badge>
                  <Badge 
                    className="absolute bottom-3 left-3 bg-yellow-500/90 text-yellow-900 border-none"
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    Coming Soon
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    by {product.vendor}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 space-y-3">
                <div className="flex space-x-2 w-full">
                  <Button className="flex-1" disabled>
                    <Clock className="h-4 w-4 mr-2" />
                    Coming Soon
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href={`/vendor/${product.vendor.toLowerCase().replace(' ', '-')}`}>
                      <MessageCircle className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="text-xs text-center text-muted-foreground">
                  Contact Vendor • Earn up to {product.commission}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" disabled>
            <Clock className="h-4 w-4 mr-2" />
            Products Coming Soon
          </Button>
        </div>
      </div>
    </section>
  );
}