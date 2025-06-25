"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, Shield, Globe, Users, Zap } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const features = [
  {
    icon: Globe,
    title: 'Global Marketplace',
    description: 'Connect with vendors and affiliates worldwide through our borderless platform.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: Users,
    title: 'Networking Focus',
    description: 'Build lasting relationships and grow your affiliate network with advanced tools.',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security with full regulatory compliance across all markets.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Zap,
    title: 'AI-Powered',
    description: 'Leverage cutting-edge AI for product recommendations and performance optimization.',
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10'
  }
];

const complianceItems = [
  {
    category: 'Skill-Based Products',
    description: 'We verify that certifications and training comply with industry standards, ensuring accurate marketing claims and transparency.'
  },
  {
    category: 'Information Products',
    description: 'We disclose costs and protect user data, respecting copyright and licensing laws.'
  },
  {
    category: 'Educational Programs',
    description: 'We ensure programs are accredited and protect student data.'
  },
  {
    category: 'Event Tickets',
    description: 'We sell valid tickets, clearly describe events, and comply with local event regulations.'
  },
  {
    category: 'App Software',
    description: 'We respect intellectual property laws, ensure software security, and provide clear terms of use and privacy policies.'
  }
];

export function AboutSection() {
  const [openCompliance, setOpenCompliance] = useState(false);
  const [openMakes, setOpenMakes] = useState(false);

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            About Hisnak Marketplace
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Redefining the Future of{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Digital Commerce
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Hisnak Marketplace is an affiliate networking & ecommerce platform that connects 
            vendors, affiliate networkers, and buyers of digital products and services. 
            Our platform is designed to foster collaboration and networking, redefining 
            the future of digital commerce for passive income opportunities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are pioneering affiliate networking and innovative e-commerce solutions 
              that empower low-income earners and the unemployed; and help vendors sell 
              more of their products and services through a performance-based passive 
              income program and a results-driven networking system.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We created this sustainable income opportunity to help participants of our 
              program gain financial independence and stability. Our ultimate mission is 
              to uplift millions from poverty within a decade or two, transforming lives 
              through networking, affiliating and knowledge-sharing.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
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
        </div>

        <div className="space-y-8">
          <Collapsible open={openMakes} onOpenChange={setOpenMakes}>
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full justify-between text-left h-auto p-6 border-2"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    What Makes Hisnak Affiliate Networking Marketplace Special?
                  </h3>
                  <p className="text-muted-foreground">
                    Discover the unique advantages that set us apart from other platforms
                  </p>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${openMakes ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 pt-4">
              <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Quality Assurance</h4>
                      <p className="text-muted-foreground">
                        At Hisnak Marketplace, we try our best to only list high quality and 
                        proven products in our marketplace. We do this by manually reviewing 
                        each product that is submitted to our marketplace.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Better Conversions</h4>
                      <p className="text-muted-foreground">
                        With this, you can be rest assured that you're really promoting helpful 
                        products to the public. This also helps your conversions as well when 
                        you decide to promote any of our products.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Secure Tracking</h4>
                      <p className="text-muted-foreground">
                        Also, our unique affiliate tracking process ensures that your affiliate 
                        commissions are safe and accurately attributed to your efforts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible open={openCompliance} onOpenChange={setOpenCompliance}>
            <CollapsibleTrigger asChild>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full justify-between text-left h-auto p-6 border-2"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Legal & Regulatory Compliance
                  </h3>
                  <p className="text-muted-foreground">
                    Learn about our comprehensive compliance framework and standards
                  </p>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${openCompliance ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 pt-4">
              <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    To ensure legal & regulatory compliance for Hisnak Affiliate Networking 
                    Marketplace, we adhere to the following guidelines:
                  </p>
                  <div className="space-y-4">
                    {complianceItems.map((item, index) => (
                      <div key={index} className="border-l-4 border-primary/20 pl-4">
                        <h4 className="font-semibold mb-2">{item.category}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      We regularly consult legal experts to stay compliant with evolving 
                      regulations and maintain the highest standards of business ethics.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}