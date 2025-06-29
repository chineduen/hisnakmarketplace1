"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Users, 
  DollarSign, 
  Star,
  TrendingUp,
  Target,
  Zap,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const highlights = [
  {
    icon: DollarSign,
    title: 'Earn ₦100K - ₦1M Monthly',
    description: 'Build sustainable passive income through our proven affiliate networking system',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: Users,
    title: 'Join 10K+ Success Stories',
    description: 'Connect with a thriving community of successful affiliate networkers',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: Zap,
    title: 'Start Today - Only ₦2,000',
    description: 'Limited time offer: 80% OFF the regular price of ₦10,000',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10'
  }
];

const benefits = [
  'Free registration and participation',
  'Up to 50% commission on direct sales',
  '10% commission on referral sales',
  'Weekly automatic payouts',
  'Comprehensive training and support',
  'No experience required'
];

export function LearnEarnSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative">
        <div className="text-center space-y-6 mb-16">
          <Badge className="gradient-bg text-white border-none text-lg px-6 py-2 animate-pulse-slow">
            🔥 Limited Time Offer - 80% OFF!
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Would You Like to Learn How to{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Make Money Online?
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Transform your financial future with the Hisnak Affiliate Networking Program. 
              Join thousands earning passive income through our proven system.
            </p>
            
            <div className="p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/20">
              <p className="text-lg font-medium text-yellow-800 dark:text-yellow-200">
                ⚠️ Special Launch Price: Only ₦2,000 (Regular Price: ₦10,000) - Expires in 24 days!
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="space-y-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${highlight.bgColor} mx-auto`}>
                    <highlight.icon className={`h-8 w-8 ${highlight.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Why Choose the Hisnak Program?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our affiliate networking program is designed for anyone looking to build financial security - 
                from students and stay-at-home parents to unemployed individuals and recent graduates.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
              <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">
                Real Success Stories:
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                "I went from ₦30,000 to ₦300,000 monthly in just 90 days!" - Tope A.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="flex items-center justify-center space-x-2">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">How It Works</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-background/60 rounded-lg">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div className="text-left">
                        <h4 className="font-semibold">Sign Up Free</h4>
                        <p className="text-sm text-muted-foreground">Complete your profile and get started</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-background/60 rounded-lg">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div className="text-left">
                        <h4 className="font-semibold">Learn & Promote</h4>
                        <p className="text-sm text-muted-foreground">Access training and start promoting products</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-background/60 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div className="text-left">
                        <h4 className="font-semibold">Earn & Scale</h4>
                        <p className="text-sm text-muted-foreground">Get paid weekly and build your network</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">
                      Earn up to 50% commission + 10% from your referrals!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-30"></div>
          </div>
        </div>

        <div className="text-center space-y-8">
          <h3 className="text-3xl font-bold">
            Ready to Transform Your Life?
          </h3>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button size="lg" className="text-xl h-16 px-12 gradient-bg text-white border-none" asChild>
              <Link href="/learn-earn">
                <DollarSign className="mr-2 h-6 w-6" />
                Start Today - Only ₦2,000!
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="text-xl h-16 px-8 border-2" asChild>
              <Link href="/learn-earn#learn-more">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 pt-4">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary"></div>
                <div className="w-8 h-8 rounded-full bg-accent"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                <div className="w-8 h-8 rounded-full bg-rose-500"></div>
              </div>
              <span className="text-sm text-muted-foreground">10K+ Success Stories</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground ml-2">4.9/5 Rating</span>
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful affiliate networkers who are already building 
            their financial future. The earlier you start, the better your chances!
          </p>
        </div>
      </div>
    </section>
  );
}