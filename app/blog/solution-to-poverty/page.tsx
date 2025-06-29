"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  TrendingUp,
  DollarSign,
  Users,
  Target,
  CheckCircle,
  Star,
  Zap,
  Heart,
  Building,
  Phone,
  Mail,
  MessageCircle,
  Award,
  Globe,
  GraduationCap,
  Shield,
  Network,
  Lightbulb,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

const problemsWithPoverty = [
  {
    icon: DollarSign,
    title: 'Lack of Capital',
    description: 'Traditional businesses require significant startup capital that most people don\'t have',
    color: 'text-red-600',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: BookOpen,
    title: 'Limited Information',
    description: 'Many people lack access to information about income-generating opportunities',
    color: 'text-orange-600',
    bgColor: 'bg-orange-500/10'
  },
  {
    icon: Users,
    title: 'No Support System',
    description: 'Without mentorship and community support, people struggle to succeed alone',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Target,
    title: 'Lack of Skills',
    description: 'Missing digital skills that are essential in today\'s economy',
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10'
  }
];

const hisnakSolutions = [
  {
    icon: GraduationCap,
    title: 'Skill-Based Empowerment',
    description: 'Participants gain access to practical training in digital marketing, affiliate networking, online business development, and personal branding. These skills help them become income creators, not just job seekers.',
    benefits: [
      'Digital marketing mastery',
      'Affiliate networking strategies',
      'Online business development',
      'Personal branding techniques'
    ],
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  },
  {
    icon: Shield,
    title: 'No Capital Required',
    description: 'Unlike traditional businesses, the Hisnak Program removes the barrier of startup capital. With internet access and commitment, anyone can begin earning through affiliate commissions and networking.',
    benefits: [
      'Zero startup costs',
      'No inventory needed',
      'No shipping required',
      'Start earning immediately'
    ],
    color: 'text-accent',
    bgColor: 'bg-accent/10'
  },
  {
    icon: Award,
    title: 'Verified Income Opportunities',
    description: 'Access to high-converting digital products, training resources to promote effectively, and tools to track and grow your performance. Everything is built to ensure transparency and sustainability.',
    benefits: [
      'High-converting products',
      'Effective promotion training',
      'Performance tracking tools',
      'Transparent commission structure'
    ],
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: Heart,
    title: 'Community & Mentorship',
    description: 'You\'re not alone. The program includes support groups, regular mentorship, and peer collaboration. This builds a success-driven community that lifts people up.',
    benefits: [
      'Active support groups',
      'Regular mentorship sessions',
      'Peer collaboration',
      'Success-driven community'
    ],
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10'
  },
  {
    icon: TrendingUp,
    title: 'Earn as You Learn',
    description: 'Even beginners can earn while learning how to build passive income streams. From ₦5,000 to ₦500,000 or more per month is achievable based on effort and performance.',
    benefits: [
      'Immediate earning potential',
      'Scalable income streams',
      'Performance-based rewards',
      'No earning limits'
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-500/10'
  }
];

const targetAudience = [
  'Unemployed youth seeking opportunities',
  'Students looking for income while studying',
  'Stay-at-home parents needing flexible work',
  'Underpaid workers wanting additional income',
  'Aspiring entrepreneurs without capital',
  'Recent graduates struggling to find jobs',
  'People with disabilities seeking accessible work',
  'Retirees wanting to supplement pensions',
  'Rural communities with limited opportunities',
  'Anyone trapped in the cycle of poverty'
];

const realBenefits = [
  {
    benefit: 'Financial Independence',
    impact: 'No more reliance on unstable jobs or low salaries',
    icon: DollarSign,
    color: 'text-green-600'
  },
  {
    benefit: 'Free Skill Acquisition',
    impact: 'Learn digital tools that are in global demand',
    icon: GraduationCap,
    color: 'text-blue-600'
  },
  {
    benefit: 'Lifetime Access to Verified Products',
    impact: 'Promote real solutions and earn instantly',
    icon: Award,
    color: 'text-purple-600'
  },
  {
    benefit: 'Networking Power',
    impact: 'Collaborate with others, grow faster, and share success',
    icon: Network,
    color: 'text-accent'
  },
  {
    benefit: 'Personal Growth',
    impact: 'Build confidence, communication, and entrepreneurial mindset',
    icon: TrendingUp,
    color: 'text-primary'
  }
];

const successMetrics = [
  { label: 'People Lifted from Poverty', value: '5,000+', icon: Users },
  { label: 'Average Monthly Earnings', value: '₦150K', icon: DollarSign },
  { label: 'Success Rate', value: '85%', icon: TrendingUp },
  { label: 'Countries Reached', value: '15+', icon: Globe }
];

export default function SolutionToPovertyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <Badge className="gradient-bg text-white border-none">
              Featured Article
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Solution to{" "}
              <span className="text-transparent bg-clip-text gradient-bg">
                Poverty
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              How the Hisnak Affiliate Networking Program is breaking the cycle of poverty through 
              digital empowerment, skill development, and sustainable income opportunities.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Hisnak Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>January 22, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mb-12">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Breaking the Cycle of Poverty"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <Badge className="gradient-bg text-white border-none mb-2">
                Social Impact
              </Badge>
              <p className="text-lg font-medium">Empowering communities through digital opportunities</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Understanding the Real Problem</h2>
              <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Poverty is not just a lack of money — it's a lack of opportunity, information, and support.</strong>
                </p>
                <p className="text-muted-foreground">
                  The Hisnak Affiliate Networking Program is a modern solution designed to bridge this gap by empowering 
                  individuals with real digital skills, affiliate opportunities, online networking skills, and income-generating 
                  systems that require no capital to start.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mt-6">
                For too long, poverty has been treated as an inevitable condition rather than a solvable problem. 
                Traditional approaches focus on charity and temporary relief, but they don't address the root causes. 
                The Hisnak Program takes a different approach – we believe in empowerment, not dependency.
              </p>
            </section>

            {/* The Root Causes */}
            <section>
              <h2 className="text-3xl font-bold mb-6">The Root Causes of Modern Poverty</h2>
              <p className="text-lg leading-relaxed mb-8">
                To solve poverty effectively, we must first understand what really causes it in today's digital economy:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {problemsWithPoverty.map((problem, index) => (
                  <Card key={index} className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${problem.bgColor} flex-shrink-0`}>
                          <problem.icon className={`h-6 w-6 ${problem.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                          <p className="text-muted-foreground">{problem.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="text-lg font-medium text-yellow-800 dark:text-yellow-200">
                  <strong>The Traditional Problem:</strong> Most poverty alleviation programs treat symptoms, not causes. 
                  They provide temporary relief but don't build long-term capacity for self-sufficiency.
                </p>
              </div>
            </section>

            {/* What Is Hisnak Program */}
            <section>
              <h2 className="text-3xl font-bold mb-6">✅ What Is the Hisnak Program?</h2>
              <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                        <Lightbulb className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">A Revolutionary Approach to Poverty Eradication</h3>
                    </div>
                    
                    <p className="text-lg leading-relaxed">
                      The Hisnak Program is a powerful Affiliate Networking & E-commerce Marketplace designed to help anyone — 
                      regardless of background — learn how to earn, grow, and build sustainable wealth through the digital economy. 
                      It connects individuals to verified products, educational courses, and software they can promote and profit from.
                    </p>
                    
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="text-center p-4 bg-background/60 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-2">10K+</div>
                        <p className="text-sm text-muted-foreground">Lives Transformed</p>
                      </div>
                      <div className="text-center p-4 bg-background/60 rounded-lg">
                        <div className="text-2xl font-bold text-accent mb-2">₦5M+</div>
                        <p className="text-sm text-muted-foreground">Paid to Affiliates</p>
                      </div>
                      <div className="text-center p-4 bg-background/60 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600 mb-2">15+</div>
                        <p className="text-sm text-muted-foreground">Countries Reached</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* How Program Solves Poverty */}
            <section>
              <h2 className="text-3xl font-bold mb-6">💡 How the Program Solves Poverty</h2>
              <p className="text-lg leading-relaxed mb-8">
                The Hisnak Program addresses each root cause of poverty with targeted, sustainable solutions:
              </p>

              <div className="space-y-8">
                {hisnakSolutions.map((solution, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-background/60 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${solution.bgColor}`}>
                          <solution.icon className={`h-8 w-8 ${solution.color}`} />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">{index + 1}</Badge>
                          <CardTitle className="text-xl">{solution.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Target Audience */}
            <section>
              <h2 className="text-3xl font-bold mb-6">🎯 Who Is It For?</h2>
              <p className="text-lg leading-relaxed mb-6">
                The Hisnak Program is specifically designed for those who need it most - people trapped in the cycle of poverty 
                who are looking for a genuine way out:
              </p>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-background/60 rounded-lg border">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{audience}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">
                  Universal Accessibility:
                </h4>
                <p className="text-green-700 dark:text-green-300">
                  The beauty of the Hisnak Program is that it doesn't discriminate. Whether you're 18 or 80, 
                  have a PhD or never finished school, live in Lagos or a remote village - if you have internet 
                  access and the willingness to learn, you can succeed.
                </p>
              </div>
            </section>

            {/* Real Benefits Table */}
            <section>
              <h2 className="text-3xl font-bold mb-6">💸 Real Benefits</h2>
              <p className="text-lg leading-relaxed mb-8">
                The Hisnak Program delivers tangible, measurable benefits that directly address the challenges of poverty:
              </p>

              <div className="space-y-6">
                {realBenefits.map((item, index) => (
                  <Card key={index} className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/50`}>
                          <item.icon className={`h-6 w-6 ${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{item.benefit}</h4>
                          <p className="text-muted-foreground">{item.impact}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Success Metrics */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Measuring Our Impact</h2>
              <p className="text-lg leading-relaxed mb-8">
                Real change requires real measurement. Here's how the Hisnak Program is making a difference:
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {successMetrics.map((metric, index) => (
                  <Card key={index} className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-accent/5 text-center">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mx-auto">
                          <metric.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-3xl font-bold">{metric.value}</div>
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h4 className="font-semibold mb-2">Beyond the Numbers:</h4>
                <p className="text-muted-foreground">
                  These statistics represent real families who can now afford education for their children, 
                  individuals who've gained confidence and purpose, and communities that are becoming more 
                  economically resilient. Each number tells a story of transformation.
                </p>
              </div>
            </section>

            {/* How to Get Started */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Breaking the Cycle: How to Get Started</h2>
              <p className="text-lg leading-relaxed mb-8">
                The journey from poverty to prosperity begins with a single step. Here's how you can start your transformation today:
              </p>

              <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Your Path to Financial Freedom</h3>
                      <p className="text-lg mb-6">
                        Join the Hisnak Program today for just ₦2,000 (limited time offer - regular price ₦10,000)
                      </p>
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="text-center p-6 bg-background/60 rounded-xl">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">1</div>
                        <h4 className="font-semibold mb-2">Register & Pay</h4>
                        <p className="text-sm text-muted-foreground">Make a one-time payment of ₦2,000 and complete your registration</p>
                      </div>
                      
                      <div className="text-center p-6 bg-background/60 rounded-xl">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">2</div>
                        <h4 className="font-semibold mb-2">Learn & Apply</h4>
                        <p className="text-sm text-muted-foreground">Access training materials and start applying what you learn immediately</p>
                      </div>
                      
                      <div className="text-center p-6 bg-background/60 rounded-xl">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">3</div>
                        <h4 className="font-semibold mb-2">Earn & Grow</h4>
                        <p className="text-sm text-muted-foreground">Start earning commissions and build your network for sustainable income</p>
                      </div>
                    </div>

                    {/* Payment Details */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <Card className="border border-primary/20">
                        <CardHeader className="text-center">
                          <div className="w-16 h-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center">
                            <Building className="h-4 w-4 text-white" />
                          </div>
                          <CardTitle className="text-lg">Providus Bank</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Account Name:</span>
                            <span className="font-medium">HISNAK LTD</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Account Number:</span>
                            <span className="font-medium">9603947938</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bank:</span>
                            <span className="font-medium">PROVIDUS BANK</span>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border border-accent/20">
                        <CardHeader className="text-center">
                          <div className="w-16 h-8 bg-green-600 rounded mx-auto mb-2 flex items-center justify-center">
                            <Building className="h-4 w-4 text-white" />
                          </div>
                          <CardTitle className="text-lg">Carbon MFB</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Account Name:</span>
                            <span className="font-medium">HISNAK LTD</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Account Number:</span>
                            <span className="font-medium">9031063507</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bank:</span>
                            <span className="font-medium">CARBON MFB</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="text-center space-y-4">
                      <p className="text-muted-foreground">
                        After payment, submit your screenshot proof via:
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="outline" asChild>
                          <a href="https://wa.me/2349070724260">
                            <Phone className="mr-2 h-4 w-4" />
                            WhatsApp: 09070724260
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="mailto:admin@hisnak.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Email: admin@hisnak.com
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="https://t.me/07059912997">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Telegram: 07059912997
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Final Word */}
            <section>
              <h2 className="text-3xl font-bold mb-6">🔑 Final Word</h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardContent className="p-8">
                    <blockquote className="text-2xl font-bold text-center mb-6">
                      "Poverty ends where opportunity begins."
                    </blockquote>
                    
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p>
                        The Hisnak Program is more than a platform — it's a movement to equip millions with the tools 
                        and skills needed to rise above poverty permanently.
                      </p>
                      
                      <p>
                        We're not offering a quick fix or false promises. We're providing a proven system, comprehensive 
                        training, ongoing support, and a community of people committed to lifting each other up.
                      </p>
                      
                      <p className="font-semibold">
                        Join today, take action, and become part of the next generation of digital income earners.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-200">
                    Remember:
                  </h4>
                  <p className="text-yellow-700 dark:text-yellow-300">
                    Every day you wait is another day you remain in the same financial situation. 
                    The best time to plant a tree was 20 years ago. The second best time is now.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-8 mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
            <h3 className="text-3xl font-bold">
              Ready to Break Free from Poverty?
            </h3>
            <p className="text-xl text-muted-foreground">
              Join the movement that's transforming lives across Africa and beyond.
            </p>
            
            <Button size="lg" className="text-xl h-16 px-12 gradient-bg text-white border-none" asChild>
              <Link href="/learn-earn">
                <DollarSign className="mr-2 h-6 w-6" />
                Start Your Transformation - ₦2,000
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary"></div>
                  <div className="w-8 h-8 rounded-full bg-accent"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                  <div className="w-8 h-8 rounded-full bg-rose-500"></div>
                </div>
                <span className="text-sm text-muted-foreground">5,000+ Lives Changed</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground ml-2">4.9/5 Impact Rating</span>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Getting Started</Badge>
                  <h4 className="font-semibold mb-2">How to Transform Your Life with Affiliate Networking</h4>
                  <p className="text-sm text-muted-foreground mb-4">A comprehensive guide to building sustainable passive income through affiliate networking.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/blog/how-to-transform-your-life-with-affiliate-networking">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Success Stories</Badge>
                  <h4 className="font-semibold mb-2">From Zero to ₦500K Monthly: Real Success Stories</h4>
                  <p className="text-sm text-muted-foreground mb-4">Inspiring stories from Hisnak affiliates who transformed their lives.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/blog/success-stories">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Strategies</Badge>
                  <h4 className="font-semibold mb-2">10 Proven Strategies to Increase Your Affiliate Commissions</h4>
                  <p className="text-sm text-muted-foreground mb-4">Learn advanced techniques that top affiliate networkers use to maximize earnings.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/blog/10-proven-strategies">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}