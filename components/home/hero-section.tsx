"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Play, Star, TrendingUp, Users, DollarSign } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative">
        <div className="grid gap-12 py-20 md:py-32 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="space-y-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tighter text-justify">
                  <span className="block text-transparent bg-clip-text gradient-bg mb-4">
                    The Future of Affiliate Industry Starts Here
                  </span>
                </h1>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl lg:text-4xl text-justify">
                    Learn → Apply →{" "}
                    <span className="text-transparent bg-clip-text gradient-bg">
                      Earn
                    </span>{" "}
                    → Scale
                  </h2>
                </div>
              </div>
              
              <p className="max-w-[600px] text-xl text-muted-foreground md:text-2xl leading-relaxed mx-auto text-justify">
                Join the world's most advanced AI-powered affiliate networking marketplace. 
                Connect with global vendors, promote premium products, and build your 
                passive income empire.
              </p>
            </div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button size="lg" className="text-lg h-14 px-8" asChild>
                <Link href="/register">
                  Create Free Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg h-14 px-8 border-2" 
                asChild
              >
                <Link href="#demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
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
                <span className="text-sm text-muted-foreground">10K+ Active Affiliates</span>
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
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="glass-card rounded-2xl p-6 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Monthly Growth</p>
                      <p className="text-2xl font-bold">+47%</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Active Users</p>
                      <p className="text-2xl font-bold">10K+</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">
                      <DollarSign className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Paid Out</p>
                      <p className="text-2xl font-bold">₦5M+</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-2xl p-6 animate-float" style={{ animationDelay: '3s' }}>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10">
                      <Star className="h-6 w-6 text-rose-500" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Products Sold</p>
                      <p className="text-2xl font-bold">100K+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}