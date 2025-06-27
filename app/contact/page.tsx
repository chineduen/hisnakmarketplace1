"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Users,
  Building,
  HelpCircle
} from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email',
    contact: 'admin@hisnak.com',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us directly',
    contact: '+2349070724260',
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Monday - Friday',
    contact: '9:00 AM - 6:00 PM WAT',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Based in Nigeria',
    contact: 'Serving globally',
    color: 'text-green-600',
    bgColor: 'bg-green-500/10'
  }
];

const inquiryTypes = [
  'General Inquiry',
  'Affiliate Program Questions',
  'Vendor Partnership',
  'Technical Support',
  'Payment Issues',
  'Account Help',
  'Product Questions',
  'Partnership Opportunities'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            Contact Us
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Get in Touch with{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Our Team
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Have questions about our affiliate program, need technical support, or want to 
            explore partnership opportunities? We're here to help you succeed.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {contactMethods.map((method) => (
            <Card key={method.title} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${method.bgColor} mx-auto`}>
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <p className="font-medium">{method.contact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-background/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Enter message subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  <span>Frequently Asked Questions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-background/60 rounded-lg">
                    <h4 className="font-semibold mb-2">How do I join the affiliate program?</h4>
                    <p className="text-sm text-muted-foreground">
                      Simply register for free on our platform and complete your profile. 
                      You can start promoting products immediately after approval.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-background/60 rounded-lg">
                    <h4 className="font-semibold mb-2">When do I get paid?</h4>
                    <p className="text-sm text-muted-foreground">
                      Commissions are processed and deposited into your bank account 
                      every Saturday automatically.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-background/60 rounded-lg">
                    <h4 className="font-semibold mb-2">Is there a minimum payout?</h4>
                    <p className="text-sm text-muted-foreground">
                      No, there's no minimum payout threshold. You get paid for 
                      every successful sale you make.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-accent" />
                  <span>Quick Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Need immediate assistance? Here are the fastest ways to get help:
                </p>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:admin@hisnak.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email: admin@hisnak.com
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="tel:+2349070724260">
                      <Phone className="mr-2 h-4 w-4" />
                      Call: +2349070724260
                    </a>
                  </Button>
                </div>
                
                <div className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> We typically respond to emails within 
                    24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}