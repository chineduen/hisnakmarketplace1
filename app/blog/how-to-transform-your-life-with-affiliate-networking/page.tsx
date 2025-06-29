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
  Globe
} from 'lucide-react';
import Link from 'next/link';

const successStories = [
  {
    name: 'Tope Akintayo',
    achievement: 'From ₦30,000 to ₦100,000 - ₦300,000/month in 90 Days!',
    quote: 'I was skeptical at first, but after applying what I learned in Hisnak Program, my online business skyrocketed. I\'m now making more money than I ever did in my 9-5 job!',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
  },
  {
    name: 'Aisha Yusuf',
    achievement: 'Single Mom Turned Full-Time Affiliate Networker',
    quote: 'As a single mom of three, I needed a flexible way to make money after the death of my husband. The Hisnak Program gave me the skills and confidence to build an online business that supports my family! I make ₦50,000 to ₦100,000 monthly.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  },
  {
    name: 'Michael Okechukwu',
    achievement: 'Recent Graduate turned Affiliate Networker',
    quote: 'Instead of hunting for a job after graduation, I decided to try an online business. I started Hisnak Program. The first months, I earned ₦65,000. Second month, ₦120,000.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
  }
];

const targetAudience = [
  'Students & recent graduates 🎓',
  'Stay-at-home moms/dads 👩‍👧‍👦',
  '9–5 employees 🏢',
  'Freelancers & gig workers 💻',
  'Unemployed individuals 🙋‍♂️',
  'Job seekers & part-timers 🔍',
  'Coaches, bloggers & marketers 📣',
  'Retirees & digital nomads 🌍',
  'Anyone looking for freedom & passive income 💰'
];

const programBenefits = [
  'Earn 50% commission on every sale you make',
  'Get guidance and support from experienced mentors',
  'Run free ads on socials',
  'The program uses proven methods to help you make money',
  'Be your own boss — work when and how you want',
  'No money needed upfront, so no risk for you',
  'Designed to help you earn steady, long-term income',
  'Easy to learn and follow, even if you\'re new',
  'No need to keep any stock or products yourself',
  'Customers get their product right away after buying',
  'Work part-time or full-time — you choose what fits your life',
  'Low starting cost with the chance to make good money monthly',
  'Make more money by bringing others into the program',
  'Earn money every week from the team you build',
  'Promote the program without creating your own product',
  'Work from anywhere with internet access',
  'The company handles customer questions and support',
  'Perfect for students, parents, or anyone busy — set your own hours',
  'Your earnings depend on how much effort you put in — no limits!',
  'Access training to improve your skills and stay updated'
];

const steps = [
  {
    number: '1',
    title: 'Sign Up Free',
    description: 'Register for free and complete your profile with your personal details including full name (as in bank account), email, phone, and address.',
    icon: Users,
    color: 'text-primary'
  },
  {
    number: '2',
    title: 'Learn & Promote',
    description: 'Access comprehensive training materials and start promoting our digital products using your unique affiliate link.',
    icon: TrendingUp,
    color: 'text-accent'
  },
  {
    number: '3',
    title: 'Earn & Scale',
    description: 'Get paid when customers buy through your link. Commissions are deposited into your bank account every Saturday automatically.',
    icon: DollarSign,
    color: 'text-yellow-600'
  }
];

export default function BlogArticlePage() {
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
              How to Transform Your Life with{" "}
              <span className="text-transparent bg-clip-text gradient-bg">
                Affiliate Networking
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive guide to building sustainable passive income through the Hisnak Affiliate Networking Program - 
              from zero to ₦500K monthly earnings.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Hisnak Team</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>January 20, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative mb-12">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
              alt="Affiliate Networking Success"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <Badge className="gradient-bg text-white border-none mb-2">
                Success Story
              </Badge>
              <p className="text-lg font-medium">Real people achieving financial freedom through affiliate networking</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold mb-6">The Reality of Financial Struggle</h2>
              <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Would you like to learn how to make money online?</strong>
                </p>
                <p className="text-muted-foreground">
                  This business is for all kinds of low-income earners – I'm talking about people 
                  who are earning ₦5M to ₦0 yearly. If you fall into this category, this is your 
                  opportunity to start making additional income.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed mt-6">
                If you've ever dreamed of earning passive income – even while you sleep – this is your moment. 
                The Hisnak Affiliate Networking Program isn't just another online opportunity; it's a proven 
                system that has transformed thousands of lives across Nigeria and beyond.
              </p>
            </section>

            {/* What Makes Affiliate Networking Different */}
            <section>
              <h2 className="text-3xl font-bold mb-6">What Makes Affiliate Networking Different?</h2>
              <p className="text-lg leading-relaxed mb-6">
                We're not talking about the same old online side hustles. Affiliate networking business is different.
              </p>
              
              <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5 mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    With our Affiliate Networking Program, you can earn in two powerful ways:
                  </h3>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex items-center space-x-4 p-6 bg-background/60 rounded-xl">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <TrendingUp className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-semibold">From your direct efforts: 50%</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Earn half of every sale you make directly
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-6 bg-background/60 rounded-xl">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                        <Users className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-semibold">From the performance of your network: 10%</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Earn from your team's success
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl mt-6">
                    <p className="text-lg font-medium">
                      The second one means your income can grow daily, even when you're not actively working!
                    </p>
                    <p className="text-xl font-bold mt-2">
                      That's what we call "Earning even when you sleep". This is the real meaning of passive income.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Success Stories */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Real People, Real Results</h2>
              <p className="text-lg leading-relaxed mb-8">
                📈 Real people are already earning – day and night. Here are just a few of the success stories 
                from our affiliate networking community:
              </p>

              <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
                {successStories.map((story, index) => (
                  <Card key={index} className="border-0 shadow-lg bg-background/60 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1 space-y-3">
                          <div>
                            <h4 className="font-semibold text-lg">{story.name}</h4>
                            <p className="text-sm text-primary font-medium">{story.achievement}</p>
                          </div>
                          <blockquote className="text-muted-foreground italic">
                            "{story.quote}"
                          </blockquote>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Founder Story */}
            <section>
              <h2 className="text-3xl font-bold mb-6">The Founder's Journey</h2>
              <Card className="border-0 shadow-lg bg-background/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <Badge className="gradient-bg text-white border-none mx-auto">
                    Founder's Story
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl">
                    My Name is Chinedu Nwabunwanne, and This is Why I Started Hisnak Affiliate Networking Program
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I know what poverty feels like — not from grass to grace stories I've heard — but from a living experience.
                    </p>
                    <p>
                      There were evenings I went to bed on an empty stomach and with an empty wallet. There were years I lived from hand to mouth — no savings, no growth, only worries.
                    </p>
                    <p>
                      There were moments I contemplated ending it all because of depression, pains, insults, disrespect, & mistakes lack caused me.
                    </p>
                    <p>
                      But in all these, I refused to give up, to settle for less. Those moments – the hunger, the rejection, the closed doors – didn't stop me. They built me. They lit a fire inside me.
                    </p>
                    <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                      <p className="font-semibold text-primary">
                        Today, that fire became Hisnak – mission to eradicate poverty from the lives of millions of people globally including myself.
                      </p>
                    </div>
                    <p>
                      I didn't start Hisnak just for myself, or even just for Nigeria or Africa. I founded it for anyone who feels stuck financially – for those whose income can't keep up with their responsibilities, for the unemployed and the overlooked.
                    </p>
                    <p className="font-semibold text-lg">
                      Hisnak isn't just my story. It can be yours too.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Who This Is For */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Who Can Benefit from Affiliate Networking?</h2>
              <p className="text-lg leading-relaxed mb-6">
                The Hisnak Affiliate Networking Program is designed for anyone looking to build financial security:
              </p>

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-background/60 rounded-lg border">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{audience}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-3xl font-bold mb-6">How It Works (With Simple Math)</h2>
              <p className="text-lg leading-relaxed mb-8">
                Let's break down exactly how you can start earning with our affiliate networking system:
              </p>

              <div className="grid gap-8 lg:grid-cols-3 mb-8">
                {steps.map((step) => (
                  <Card key={step.number} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="space-y-4">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto`}>
                          <step.icon className={`h-8 w-8 ${step.color}`} />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">{step.number}</Badge>
                          <h3 className="text-lg font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-0 shadow-2xl bg-background/80 backdrop-blur-sm">
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Income Calculation Example</h3>
                      <p className="text-lg mb-4">
                        Let's say you bring in 200 affiliate downlines, and 20 of them make 10 sales each in a week.
                      </p>
                      <p className="text-lg mb-6">
                        The product price is ₦10,000, and your upline commission is ₦1,000 per sale.
                      </p>
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="text-center p-6 bg-primary/5 rounded-xl">
                        <div className="text-3xl font-bold text-primary mb-2">₦1,000</div>
                        <p className="text-sm text-muted-foreground">Commission per sale</p>
                      </div>
                      <div className="text-center p-6 bg-accent/5 rounded-xl">
                        <div className="text-3xl font-bold text-accent mb-2">10 × 20</div>
                        <p className="text-sm text-muted-foreground">Sales × People</p>
                      </div>
                      <div className="text-center p-6 bg-yellow-500/5 rounded-xl">
                        <div className="text-3xl font-bold text-yellow-600 mb-2">₦200,000</div>
                        <p className="text-sm text-muted-foreground">Per week!</p>
                      </div>
                    </div>
                    
                    <div className="text-center p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                      <p className="text-xl font-bold text-green-800 dark:text-green-200">
                        That's ₦200,000 Naira per week! And that's not including your own direct 50% commissions from selling!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Program Benefits */}
            <section>
              <h2 className="text-3xl font-bold mb-6">What You Get With This Program</h2>
              <p className="text-lg leading-relaxed mb-8">
                The Hisnak Affiliate Networking Program provides everything you need to succeed:
              </p>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {programBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background/60 rounded-lg border">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Special Offer */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Limited Time Special Offer</h2>
              <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center space-y-8">
                    <Badge className="gradient-bg text-white border-none text-lg px-6 py-2">
                      🔥 EXCLUSIVE OFFER: Limited-Time Referral Promo!
                    </Badge>
                    
                    <h3 className="text-3xl font-bold md:text-4xl">
                      We're currently running a 1-month promo!
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="text-2xl line-through text-muted-foreground">₦10,000</div>
                        <div className="text-4xl font-bold text-primary">₦2,000</div>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        That's why we've slashed the price from ₦10,000 to just ₦2,000 — for you!
                      </p>
                    </div>
                    
                    <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                      <p className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">
                        ⚠️ Hurry! This special offer expires in 24 days.
                      </p>
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

                    <div className="space-y-4">
                      <p className="text-lg font-semibold">
                        Make a One-Time Payment of ₦2,000
                      </p>
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

            {/* Conclusion */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Your Journey to Financial Freedom Starts Now</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  The Hisnak Affiliate Networking Program isn't just another online opportunity – it's a proven system 
                  that has transformed thousands of lives. From students struggling to pay fees to single parents 
                  looking for flexible income, our program has provided a pathway to financial independence.
                </p>
                
                <p className="text-lg leading-relaxed">
                  You stand a chance to earn between ₦100,000 to ₦1,000,000 every month through this opportunity. 
                  The question isn't whether it works – the success stories speak for themselves. The question is: 
                  Are you ready to take action?
                </p>
                
                <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border">
                  <blockquote className="text-xl italic text-center mb-4">
                    "If you don't find a way to make money while you sleep, you'll work until you die." — Warren Buffett
                  </blockquote>
                  <p className="text-center font-semibold">
                    Don't let this opportunity pass you by. Your future self will thank you for taking action today.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-8 mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
            <h3 className="text-3xl font-bold">
              Ready to Transform Your Life?
            </h3>
            <p className="text-xl text-muted-foreground">
              Join thousands of successful affiliate networkers who are already building their financial future.
            </p>
            
            <Button size="lg" className="text-xl h-16 px-12 gradient-bg text-white border-none" asChild>
              <Link href="/learn-earn">
                <DollarSign className="mr-2 h-6 w-6" />
                Start Today - Only ₦2,000!
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
                <span className="text-sm text-muted-foreground">10K+ Success Stories</span>
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

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Getting Started</Badge>
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

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">Psychology</Badge>
                  <h4 className="font-semibold mb-2">The Psychology of Successful Affiliate Networking</h4>
                  <p className="text-sm text-muted-foreground mb-4">Understanding the mindset that drives successful affiliate relationships.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/blog/psychology-of-success">
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
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}