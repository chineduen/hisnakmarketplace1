"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Users, 
  Building, 
  Target,
  ArrowRight,
  DollarSign,
  Network,
  UserCheck
} from 'lucide-react';

const commissionData = [
  {
    role: 'Affiliate Networker',
    percentage: 50,
    description: 'Direct sale commission',
    icon: TrendingUp,
    color: 'text-primary',
    bgColor: 'bg-primary',
    example: '₦10,000 from ₦20,000 sale'
  },
  {
    role: 'Upline Affiliate',
    percentage: 10,
    description: 'Referral bonus',
    icon: Users,
    color: 'text-accent',
    bgColor: 'bg-accent',
    example: '₦2,000 from ₦20,000 sale'
  },
  {
    role: 'Product Vendor',
    percentage: 30,
    description: 'Product owner share',
    icon: Building,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500',
    example: '₦6,000 from ₦20,000 sale'
  },
  {
    role: 'Hisnak Platform',
    percentage: 10,
    description: 'Platform fee',
    icon: Target,
    color: 'text-rose-500',
    bgColor: 'bg-rose-500',
    example: '₦2,000 from ₦20,000 sale'
  }
];

export function CommissionStructure() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            Transparent Commission Structure
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Fair & Transparent{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Reward System
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commission distribution ensures everyone gets rewarded fairly for 
            their contribution to the marketplace ecosystem.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {commissionData.map((item, index) => (
            <Card key={item.role} className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bgColor}/10`}>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{item.role}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">{item.percentage}%</span>
                  <Badge className={`${item.bgColor} text-white`}>
                    {item.percentage}%
                  </Badge>
                </div>
                
                <Progress 
                  value={item.percentage} 
                  className="h-2"
                  style={{ 
                    background: `${item.bgColor}10`
                  }}
                />
                
                <p className="text-sm text-muted-foreground">
                  Example: {item.example}
                </p>
              </CardContent>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${item.bgColor}`}></div>
            </Card>
          ))}
        </div>

        {/* Multi-Level Commission System */}
        <div className="mb-12">
          <div className="text-center space-y-4 mb-8">
            <Badge className="gradient-bg text-white border-none">
              Multi-Level Commission System
            </Badge>
            <h3 className="text-2xl font-bold">
              Build Your Network &{" "}
              <span className="text-transparent bg-clip-text gradient-bg">
                Earn Passive Income
              </span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our multi-level system rewards you for building a strong affiliate network. 
              Earn commissions not just from your direct sales, but also from your referrals' success.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xl">Level 1 (Direct)</span>
                    <Badge className="ml-2 bg-primary text-white">50% Commission</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-background/60 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">B</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>User A</strong> refers <strong>User B</strong>
                  </p>
                  <p className="text-sm">
                    User A earns <strong className="text-primary">50% commission</strong> on User B's sales.
                  </p>
                </div>
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-sm">
                    <strong>Example:</strong> If User B makes a ₦20,000 sale, User A earns ₦10,000
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/5 to-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10">
                    <Network className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-xl">Level 2 (Indirect)</span>
                    <Badge className="ml-2 bg-accent text-white">10% Commission</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-background/60 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold">B</div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">C</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>User B</strong> refers <strong>User C</strong>
                  </p>
                  <p className="text-sm">
                    User A earns <strong className="text-accent">10% commission</strong> on User C's sales.
                  </p>
                </div>
                <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <p className="text-sm">
                    <strong>Example:</strong> If User C makes a ₦20,000 sale, User A earns ₦2,000
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-2">
                  <DollarSign className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Commission Example</h3>
                </div>
                
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <span className="text-sm">Sale Price: ₦20,000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Affiliate: ₦10,000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Upline: ₦2,000</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Vendor: ₦6,000</span>
                  </div>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">How Multi-Level Works:</h4>
                  <p className="text-sm text-muted-foreground">
                    When you refer someone (Level 1), you earn 50% on their direct sales. 
                    When they refer someone else (Level 2), you earn an additional 10% on those sales. 
                    This creates a sustainable passive income stream as your network grows.
                  </p>
                </div>
                
                <p className="text-muted-foreground">
                  This transparent structure ensures sustainable growth for all parties 
                  while maintaining fair compensation across the network.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}