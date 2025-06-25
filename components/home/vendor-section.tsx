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
  Store, 
  Users, 
  Heart, 
  TrendingUp,
  CheckCircle,
  Mail,
  DollarSign,
  Calendar,
  Shield
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const requirements = [
  'Name of the product creator',
  'Product name',
  'Sales page URL',
  'What makes you an authority? Explain your expertise, experience, or credentials',
  'What solution does your product provide?',
  'Product category',
  'Target audience',
  'Product price',
  'Promotional materials (banners, email swipes, ad copies, videos)',
  'Product delivery system access for quality verification',
  'Customer support information and contact details'
];

const differentiators = [
  {
    icon: Users,
    title: 'We Train, Mentor & Support Our Affiliates',
    description: 'Most affiliates fail because they lack proper strategy, training, and mentorship. That\'s why the Hisnak Program is designed to equip our networkers with hands-on guidance, skill-building tools, and ongoing education — so they can confidently promote and sell your product to a global audience.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: Heart,
    title: 'We Foster Real Vendor–Affiliate Relationships',
    description: 'Unlike traditional platforms that focus solely on one-off promotions, Hisnak encourages strong partnerships between vendors and affiliate networkers. We connect vendors and affiliates to work closely, communicate better, and build long-term success together.',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: TrendingUp,
    title: 'We Offer a Highly Incentivized System',
    description: 'Our affiliates aren\'t just recruited — they\'re motivated. With performance bonuses, monthly performance challenges, live training sessions, and both online and face-to-face events, we keep our networkers active, engaged, excited, and results-driven.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10'
  }
];

export function VendorSection() {
  const [openVendor, setOpenVendor] = useState(false);
  const [openRequirements, setOpenRequirements] = useState(false);

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            Are You a Vendor?
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Scale Your Product with{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Elite Affiliates
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            And you have a great digital product you want to sell in the global affiliate market. 
            You're in the right place. List your product on Hisnak Affiliate Networking Marketplace 
            and team up with elite affiliate networkers from around the world who are equipped 
            to sell — and scale — your product with precision.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">
              What makes Hisnak Marketplace different from other affiliate marketplaces?
            </h3>
            <p className="text-muted-foreground">Here are 3 key reasons:</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.bgColor}`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <Badge variant="outline">{index + 1}</Badge>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Store className="h-6 w-6 text-primary" />
                  <span>Ready to Join?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Ready to get your digital product into the hands of global buyers? 
                  Join the Hisnak Marketplace — where products move and people grow.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/vendor/register">
                    <Store className="mr-2 h-5 w-5" />
                    List Your Product Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-accent" />
                  <span>Commission & Fees</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span>Your earnings per sale</span>
                    <Badge className="bg-primary text-white">50%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span>Affiliate commission</span>
                    <Badge className="bg-accent text-white">30%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span>Upline commission</span>
                    <Badge className="bg-yellow-500 text-white">10%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span>Platform fee</span>
                    <Badge className="bg-rose-500 text-white">10%</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Example: For a ₦20,000 product sale, you receive ₦10,000
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                  <span>Payment & Policies</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">7-day refund policy on all products</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Vendor payouts processed biweekly on Fridays</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Automatic commission distribution</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Real-time sales tracking</span>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Hisnak charges a 10% platform fee per sale unless you opt for 
                    a yearly vendor subscription for reduced fees.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-rose-500" />
                  <span>Quality Standards</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The Hisnak Affiliate Networking Marketplace is for valuable 
                  digital products and services. All products must meet our 
                  quality standards and compliance requirements.
                </p>
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Important:</strong> It is highly important that the product 
                    you are listing is your original product. We do not allow vendors 
                    to list products they have resale rights to or any product they 
                    don't originally own.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Collapsible open={openRequirements} onOpenChange={setOpenRequirements}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full justify-between text-left h-auto p-6 border-2 mb-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Product Listing Requirements
                </h3>
                <p className="text-muted-foreground">
                  What you need to submit to list your product on our marketplace
                </p>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform ${openRequirements ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4">
            <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    To list your products on the Hisnak Affiliate Networking Marketplace 
                    as a vendor, please prepare the following information:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-1">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{requirement}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <p className="text-sm">
                      <strong>Next Steps:</strong> Please send these details to{" "}
                      <Link href="mailto:vendors@hisnak.com" className="text-primary font-medium">
                        vendors@hisnak.com
                      </Link>{" "}
                      with the subject line: "Request for New Vendor Application".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        <div className="text-center">
          <Button size="lg" className="text-lg h-14 px-8" asChild>
            <Link href="mailto:vendors@hisnak.com?subject=Request for New Vendor Application">
              <Mail className="mr-2 h-5 w-5" />
              Start Your Vendor Application
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}