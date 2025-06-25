"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp, DollarSign, ShoppingBag, Award, Target } from 'lucide-react';

const stats = [
  {
    icon: Users,
    label: 'Registered Affiliate Networkers',
    value: '10K+',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: Award,
    label: 'Active Affiliate Networkers',
    value: '6K+',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: DollarSign,
    label: 'In Affiliate Sales',
    value: '₦20M',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: TrendingUp,
    label: 'Paid to Affiliate Networkers',
    value: '₦5M',
    color: 'text-green-600',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: Target,
    label: 'Affiliate Networkers Earn Monthly',
    value: '5K+',
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10'
  },
  {
    icon: ShoppingBag,
    label: 'Products Sold',
    value: '100K+',
    color: 'text-purple-600',
    bgColor: 'bg-purple-500/10'
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            Showcasing Results
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Trusted by Thousands of{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Affiliate Networkers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a thriving community of successful affiliate networkers who are 
            building sustainable passive income through our platform.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Ready to join the success stories?{" "}
            <a 
              href="/register" 
              className="text-primary font-semibold hover:underline"
            >
              Start your journey today →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}