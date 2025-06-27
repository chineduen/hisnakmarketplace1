"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Target,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Globe,
  Shield,
  Heart
} from 'lucide-react';
import Link from 'next/link';

const programFeatures = [
  {
    icon: Users,
    title: 'Community-Driven',
    description: 'Join a supportive community of like-minded individuals working towards financial independence.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: GraduationCap,
    title: 'Comprehensive Training',
    description: 'Access to world-class training materials, webinars, and mentorship programs.',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: TrendingUp,
    title: 'Performance-Based',
    description: 'Earn based on your performance with transparent commission structures.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with vendors and customers worldwide through our international platform.',
    color: 'text-green-600',
    bgColor: 'bg-green-500/10'
  }
];

const benefits = [
  'Free registration and participation',
  'Up to 50% commission on direct sales',
  '10% commission on referral sales',
  'Weekly automatic payouts',
  'Comprehensive training and support',
  'Access to premium digital products',
  'Real-time performance tracking',
  'Global networking opportunities'
];

export default function AboutProgramPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            About Hisnak Program
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Transforming Lives Through{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Affiliate Networking
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            The Hisnak Affiliate Networking Program is designed to empower individuals 
            worldwide to achieve financial independence through performance-based 
            passive income opportunities.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We are pioneering affiliate networking and innovative e-commerce solutions 
                  that empower low-income earners and the unemployed; and help vendors sell 
                  more of their products and services through a performance-based passive 
                  income program and a results-driven networking system.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our ultimate mission is to uplift millions from poverty within a decade 
                  or two, transforming lives through networking, affiliating and knowledge-sharing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-rose-500" />
                  <span>Who We Serve</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The Hisnak Program is designed for anyone looking to build financial security:
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {[
                    'Low-income earners', 'Unemployed individuals', 'Students', 'Stay-at-home parents',
                    'Recent graduates', 'Freelancers', 'Side hustlers', 'Digital nomads',
                    'Retirees', 'People with disabilities', 'Debt-burdened individuals', 'Gig workers'
                  ].map((audience, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{audience}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {programFeatures.map((feature) => (
                <Card key={feature.title} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.bgColor}`}>
                        <feature.icon className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-accent" />
                  <span>Program Benefits</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center space-y-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">How It Works</h3>
                </div>
                
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h4 className="font-semibold">Sign Up Free</h4>
                    <p className="text-sm text-muted-foreground">
                      Register for free and complete your profile
                    </p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <h4 className="font-semibold">Learn & Promote</h4>
                    <p className="text-sm text-muted-foreground">
                      Access training and start promoting products
                    </p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-yellow-600 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold">Earn & Scale</h4>
                    <p className="text-sm text-muted-foreground">
                      Get paid weekly and build your network
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Ready to Transform Your Life?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of successful affiliate networkers who are already building 
              their financial future through the Hisnak Program.
            </p>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button size="lg" className="text-lg h-14 px-8" asChild>
                <Link href="/register">
                  <Users className="mr-2 h-5 w-5" />
                  Join the Program - Free!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
                <Link href="/contact">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}