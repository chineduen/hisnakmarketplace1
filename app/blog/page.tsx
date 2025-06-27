"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  BookOpen,
  Target,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'How to Start Your Affiliate Marketing Journey in 2024',
    excerpt: 'A comprehensive guide for beginners looking to enter the world of affiliate marketing and build sustainable passive income.',
    category: 'Getting Started',
    author: 'Hisnak Team',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    featured: true
  },
  {
    id: 2,
    title: '10 Proven Strategies to Increase Your Affiliate Commissions',
    excerpt: 'Learn the advanced techniques that top affiliate networkers use to maximize their earnings and build successful businesses.',
    category: 'Strategies',
    author: 'Success Team',
    date: '2024-01-12',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    featured: false
  },
  {
    id: 3,
    title: 'The Psychology of Successful Affiliate Networking',
    excerpt: 'Understanding the mindset and psychological principles that drive successful affiliate relationships and long-term success.',
    category: 'Psychology',
    author: 'Dr. Marketing',
    date: '2024-01-10',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    featured: false
  },
  {
    id: 4,
    title: 'Building Your Personal Brand as an Affiliate Networker',
    excerpt: 'How to establish credibility, build trust, and create a personal brand that attracts customers and partners.',
    category: 'Branding',
    author: 'Brand Expert',
    date: '2024-01-08',
    readTime: '15 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    featured: false
  },
  {
    id: 5,
    title: 'Digital Marketing Tools Every Affiliate Should Know',
    excerpt: 'Essential tools and platforms that can help you automate, track, and optimize your affiliate marketing efforts.',
    category: 'Tools',
    author: 'Tech Team',
    date: '2024-01-05',
    readTime: '11 min read',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    featured: false
  },
  {
    id: 6,
    title: 'Success Stories: From Zero to ₦500K Monthly',
    excerpt: 'Real stories from Hisnak affiliates who transformed their lives through dedication, strategy, and consistent action.',
    category: 'Success Stories',
    author: 'Community Team',
    date: '2024-01-03',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    featured: false
  }
];

const categories = [
  { name: 'All Posts', count: 25, icon: BookOpen },
  { name: 'Getting Started', count: 8, icon: Target },
  { name: 'Strategies', count: 6, icon: TrendingUp },
  { name: 'Success Stories', count: 5, icon: Users },
  { name: 'Tools', count: 4, icon: Lightbulb },
  { name: 'Psychology', count: 2, icon: User }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            Learn N' Earn Blog
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Knowledge That{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Transforms Lives
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover proven strategies, success stories, and expert insights to accelerate 
            your affiliate networking journey and build sustainable passive income.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 mb-16">
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm sticky top-24">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="ghost"
                    className="w-full justify-between text-left h-auto p-3"
                  >
                    <div className="flex items-center space-x-2">
                      <category.icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-8">
            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5 overflow-hidden">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-64 md:h-full w-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 gradient-bg text-white border-none">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <Badge variant="outline">{post.category}</Badge>
                      <h2 className="text-2xl font-bold leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button asChild>
                        <Link href={`/blog/${post.id}`}>
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Regular Posts */}
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Badge 
                      variant="secondary" 
                      className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Ready to Start Learning?</h3>
                <p className="text-muted-foreground">
                  Join our community and get access to exclusive content, training materials, 
                  and success strategies from top affiliate networkers.
                </p>
                <Button size="lg" asChild>
                  <Link href="/register">
                    <Users className="mr-2 h-5 w-5" />
                    Join the Community
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}