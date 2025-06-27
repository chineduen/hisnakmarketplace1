"use client";

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
  Star, 
  ExternalLink, 
  MessageCircle, 
  Search,
  Filter,
  Grid,
  List,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const allProducts = [
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
    featured: true,
    sales: 5420
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
    featured: false,
    sales: 3210
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
    featured: false,
    sales: 2890
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
    featured: false,
    sales: 4120
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
    featured: false,
    sales: 1560
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
    featured: false,
    sales: 890
  },
  {
    id: 7,
    title: 'E-commerce Dropshipping Masterclass',
    category: 'Educational Program',
    price: '₦30,000',
    commission: '45%',
    rating: 4.6,
    reviews: 567,
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    vendor: 'E-com Experts',
    featured: false,
    sales: 2340
  },
  {
    id: 8,
    title: 'Social Media Growth Hacks',
    category: 'Information Product',
    price: '₦18,000',
    commission: '50%',
    rating: 4.7,
    reviews: 892,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    vendor: 'Social Gurus',
    featured: false,
    sales: 3450
  }
];

const categories = ['All Categories', 'Skill-Based Course', 'Educational Program', 'Information Product', 'App Software', 'Event Ticket'];
const sortOptions = ['Featured', 'Highest Commission', 'Best Selling', 'Highest Rated', 'Newest'];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            Affiliate Products
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Premium Digital Products{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Ready to Promote
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover high-converting digital products from verified vendors with attractive 
            commission structures designed for affiliate success.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="border-0 shadow-md bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-sm text-muted-foreground">Active Products</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-r from-accent/5 to-accent/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-sm text-muted-foreground">Verified Vendors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-r from-yellow-500/5 to-yellow-500/10">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">50%</p>
                  <p className="text-sm text-muted-foreground">Max Commission</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:items-center">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products or vendors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-background/60 backdrop-blur-sm">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`${viewMode === 'grid' ? 'h-48' : 'h-32'} w-full object-cover transition-transform duration-300 group-hover:scale-105`}
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
                </div>
              </CardHeader>

              <CardContent className={`${viewMode === 'grid' ? 'p-6' : 'p-4'} space-y-4`}>
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <h3 className={`${viewMode === 'grid' ? 'text-lg' : 'text-base'} font-semibold leading-tight group-hover:text-primary transition-colors`}>
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
                      ({product.reviews})
                    </span>
                  </div>
                  <p className={`${viewMode === 'grid' ? 'text-2xl' : 'text-xl'} font-bold text-primary`}>
                    {product.price}
                  </p>
                </div>

                <div className="text-xs text-muted-foreground">
                  {product.sales.toLocaleString()} sales
                </div>
              </CardContent>

              <CardFooter className={`${viewMode === 'grid' ? 'p-6 pt-0' : 'p-4 pt-0'} space-y-3`}>
                <div className="flex space-x-2 w-full">
                  <Button className="flex-1" asChild>
                    <Link href={`/products/${product.id}`}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </Link>
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
            <Button variant="outline" className="mt-4" onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All Categories');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}