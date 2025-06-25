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
  DollarSign
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