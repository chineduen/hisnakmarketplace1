"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { 
  ChevronDown, 
  UserPlus, 
  TrendingUp, 
  DollarSign, 
  Users,
  CheckCircle,
  ArrowRight,
  Target,
  Calendar
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const targetAudience = [
  'Affiliate marketers', 'Side hustlers', 'Low-income earners', 'Students',
  'Stay-at-home parents', 'Travel enthusiasts', 'Part-time workers', 'Remote workers',
  'Digital nomads', 'Recent graduates', 'People with disabilities', 'Debt-burdened individuals',
  'Unemployed individuals', 'Retirees', 'Freelancers', 'Gig workers'
];

const steps = [
  {
    number: '01',
    title: 'SIGN UP',
    description: 'Fill out your personal details, e.g.: your full name (as in your bank account), current email address, current phone number, country of residence, home address, gender, language and then click \'Submit\'.',
    icon: UserPlus,
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    number: '02',
    title: 'PROMOTE',
    description: 'Pick any of our digital products and start promoting it using the affiliate link that will be provided for you.',
    icon: TrendingUp,
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    number: '03',
    title: 'GET PAID',
    description: 'Get paid when a customer buys through your affiliate link. Commissions are deposited into your bank account every Saturday.',
    icon: DollarSign,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10'
  }
];

const commissionBreakdown = [
  { role: 'Affiliate Networker', percentage: 50, description: 'Direct sale commission' },
  { role: 'Upline Affiliate', percentage: 10, description: 'Referral bonus' },
  { role: 'Hisnak Platform', percentage: 10, description: 'Platform fee' },
  { role: 'Product Vendor', percentage: 30, description: 'Product owner share' }
];

export function AffiliateSection() {
  const [openAffiliate, setOpenAffiliate] = useState(false);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            Become an Affiliate Networker
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Start Your{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Financial Freedom
            </span>{" "}
            Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Whether you're looking for passive income, career change, or financial security, 
            you can easily become financially secure for a lifetime by promoting our digital 
            products and joining the Hisnak Affiliate Networking Program - completely free!
          </p>
        </div>

        <Collapsible open={openAffiliate} onOpenChange={setOpenAffiliate}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full justify-between text-left h-auto p-6 border-2 mb-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Who Can Become an Affiliate Networker?
                </h3>
                <p className="text-muted-foreground">
                  See if you qualify for our free affiliate networking program
                </p>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform ${openAffiliate ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mb-12">
            <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">
                  Our program is designed for anyone looking to build financial security:
                </p>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{audience}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
              <p className="text-muted-foreground">
                It is simple to start earning money on Hisnak Affiliate Networking Marketplace. 
                Here are simple steps: Sign up as an affiliate networker for free, 
                learn how to run an affiliate networking business, start promoting any of our 
                digital products, and you stand the chance to earn passive income weekly. 
                You can get as high as 50% commission for each successful sale.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step) => (
                <Card key={step.number} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${step.bgColor} flex-shrink-0`}>
                        <step.icon className={`h-6 w-6 ${step.color}`} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{step.number}</Badge>
                          <h4 className="text-lg font-semibold">{step.title}</h4>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Transparent Commission Structure</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our fair and transparent commission distribution ensures everyone 
                  gets rewarded for their contribution.
                </p>
                <div className="space-y-3">
                  {commissionBreakdown.map((item) => (
                    <div key={item.role} className="flex items-center justify-between p-3 bg-background/60 rounded-lg">
                      <div>
                        <p className="font-medium">{item.role}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Badge className="gradient-bg text-white">
                        {item.percentage}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <h4 className="font-semibold">Payment Schedule</h4>
                </div>
                <p className="text-muted-foreground">
                  Commissions are automatically processed and deposited into your 
                  bank account every Saturday. No minimum threshold required.
                </p>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Weekly automatic payouts</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Real-time commission tracking</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Transparent reporting dashboard</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Ready to Get Started?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              You can get started today for free! Join thousands of successful affiliate 
              networkers who are already building their financial future.
            </p>
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button size="lg" className="text-lg h-14 px-8" asChild>
              <Link href="/register">
                <UserPlus className="mr-2 h-5 w-5" />
                Join as Affiliate Networker - Free!
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="text-lg h-14 px-8">
              <span>For help, email us at: </span>
              <Link href="mailto:admin@hisnak.com" className="text-primary ml-1">
                admin@hisnak.com
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}