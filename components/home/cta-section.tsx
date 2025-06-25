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
  Target
} from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="container relative">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            Sales Challenge Alert
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Win ₦2,000,000! 💰
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be the first to reach 500 direct sales by June 30th, 2025, and walk away with 
            ₦2,000,000 in cash!
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-background/80 backdrop-blur-sm mb-16">
          <CardContent className="p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <Badge className="gradient-bg text-white">Competition Alert</Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold">
                    🗓 Competition kicks off: June 1st, 2025
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-accent" />
                      <span className="font-medium">Goal: Hit 500 sales through direct performance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-yellow-600" />
                      <span className="font-medium">Prize: ₦2,000,000 to the first person who achieves it!</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-rose-500" />
                      <span className="font-medium">This is your moment to shine, compete, and earn big.</span>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full text-lg h-14" asChild>
                  <Link href="/register">
                    <Users className="mr-2 h-5 w-5" />
                    Register to Join the Challenge!
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="glass-card rounded-2xl p-6 animate-float">
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-primary">500</div>
                      <div className="text-sm text-muted-foreground">Sales Target</div>
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-2xl p-6 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-accent">₦2M</div>
                      <div className="text-sm text-muted-foreground">Cash Prize</div>
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-2xl p-6 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-yellow-600">6</div>
                      <div className="text-sm text-muted-foreground">Months Duration</div>
                    </div>
                  </div>
                  
                  <div className="glass-card rounded-2xl p-6 animate-float" style={{ animationDelay: '3s' }}>
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold text-rose-500">1st</div>
                      <div className="text-sm text-muted-foreground">Winner Takes All</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-30"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold">
            Are you ready to make history?
          </h3>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button size="lg" className="text-lg h-14 px-8" asChild>
              <Link href="/register">
                <Users className="mr-2 h-5 w-5" />
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="text-lg h-14 px-8" asChild>
              <Link href="/affiliate-program">
                Learn More About the Program
              </Link>
            </Button>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful affiliate networkers who are already building 
            their financial future. The earlier you start, the better your chances of winning!
          </p>
        </div>
      </div>
    </section>
  );
}