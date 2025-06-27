"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Target,
  Phone,
  Mail,
  MessageCircle,
  Award,
  Globe,
  Zap,
  Heart,
  Building
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
  },
  {
    name: 'Amaka Okpala',
    achievement: 'Digital Nomad turned Affiliate Networker',
    quote: 'Thanks to the Hisnak Program, I\'m now traveling the world while earning money. The system works perfectly even when I\'m on the move.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg'
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

const faqs = [
  {
    question: 'Why are most people failing to make money online?',
    answer: 'Most people fail to make money online because they lack the right knowledge and guidance, fall for get-rich-quick schemes, try to figure everything out on their own, don\'t have a proven system to follow, or jump from one business model to another without results. The Hisnak Affiliate Networking Program eliminates these problems by providing a clear, structured roadmap.'
  },
  {
    question: 'Do I need any prior experience to succeed with The Hisnak Affiliate Networking Program?',
    answer: 'No prior experience is needed. The course is designed to be beginner-friendly, with step-by-step instructions that anyone can follow, regardless of their background or technical skills.'
  },
  {
    question: 'How soon can I start making money after joining?',
    answer: 'While results vary based on individual effort and application of the strategies, many students start seeing results within their first few weeks. The program is designed for both immediate action and long-term growth.'
  },
  {
    question: 'What makes The Hisnak Affiliate Networking Program different from other affiliate courses?',
    answer: 'The Hisnak Affiliate Networking Program offers a complete business system, not just theory. It includes step-by-step blueprints, proven strategies based on real results, beginner-friendly instructions, all necessary tools and resources, and access to an exclusive community with mentorship from industry experts.'
  },
  {
    question: 'Can I really build this business part-time?',
    answer: 'Absolutely! The business model is designed to be flexible, allowing you to work on your own schedule. Many successful students built their businesses initially working just 5-10 hours per week.'
  },
  {
    question: 'Is there any ongoing support after I purchase?',
    answer: 'Yes, all packages include ongoing support through the Hisnak ecosystem of tools and resources. The Premium package includes lifetime updates and additional support resources.'
  }
];

export default function LearnEarnPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="container relative">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <Badge className="gradient-bg text-white border-none text-lg px-6 py-2">
                Limited Time Offer - 80% OFF!
              </Badge>
              
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Would You Like to Learn How to{" "}
                <span className="text-transparent bg-clip-text gradient-bg">
                  Make Money Online?
                </span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  This business is for all kinds of low-income earners – I'm talking about people 
                  who are earning ₦5M to ₦0 yearly.
                </p>
                
                <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                  <p className="text-lg font-medium">
                    If you fall into this category, this is your opportunity to start making additional income.
                  </p>
                </div>
                
                <p className="text-xl text-muted-foreground">
                  If you've ever dreamed of earning passive income – even while you sleep – this is your moment.
                </p>
              </div>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
                <Button size="lg" className="text-lg h-16 px-8 gradient-bg text-white border-none" asChild>
                  <a href="#payment">
                    <DollarSign className="mr-2 h-6 w-6" />
                    Start Today - Only ₦2,000!
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" className="text-lg h-16 px-8 border-2" asChild>
                  <a href="#learn-more">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Affiliate Networking Difference */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-3xl font-bold md:text-5xl">
                We're not talking about the same old online side hustles.
              </h2>
              <p className="text-xl text-muted-foreground">
                Affiliate networking business is different.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-center">
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
                  
                  <div className="text-center p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                    <p className="text-lg font-medium">
                      The second one means your income can grow daily, even when you're not actively working!
                    </p>
                    <p className="text-xl font-bold mt-2">
                      That's what we call "Earning even when you sleep". This is the real meaning of passive income.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge className="gradient-bg text-white border-none">
                Success Stories
              </Badge>
              <h2 className="text-3xl font-bold md:text-5xl">
                Real People, Real Results
              </h2>
              <p className="text-xl text-muted-foreground">
                📈 Real people are already earning – day and night.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
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
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl bg-background/80 backdrop-blur-sm">
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
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold md:text-5xl">
                Affiliate Networking Business For You, If You Are:
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3 max-w-4xl mx-auto">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-background/60 rounded-lg border">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span>{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold md:text-5xl">
                How It Works (With Simple Math)
              </h2>
            </div>

            <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-8">
                  <div className="text-center">
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
          </div>
        </section>

        {/* Why Start Today */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold md:text-5xl">
                🚀 Why Start Affiliate Networking Today?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              {[
                { icon: DollarSign, title: 'Low Startup Costs', color: 'text-primary' },
                { icon: Globe, title: 'Work From Anywhere', color: 'text-accent' },
                { icon: Clock, title: 'Earn While You Sleep', color: 'text-yellow-600' },
                { icon: Shield, title: 'No Inventory or Shipping', color: 'text-green-600' },
                { icon: Users, title: 'No Experience Needed', color: 'text-purple-600' },
                { icon: TrendingUp, title: 'Learn, Grow, and Scale Easily', color: 'text-rose-500' },
                { icon: Target, title: 'Total Flexibility and Freedom', color: 'text-blue-600' },
                { icon: Heart, title: 'Peace of Mind', color: 'text-pink-600' }
              ].map((benefit, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="space-y-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/50 mx-auto`}>
                        <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                      </div>
                      <h4 className="font-semibold">{benefit.title}</h4>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <blockquote className="text-xl italic text-muted-foreground mb-8">
                "If you don't find a way to make money while you sleep, you'll work until you die." — Warren Buffett
              </blockquote>
              
              <p className="text-lg font-semibold">
                You stand a chance to earn between ₦100,000 to ₦1,000,000 every month through this opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Exclusive Offer */}
        <section id="payment" className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl bg-background/90 backdrop-blur-sm">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center space-y-8">
                    <Badge className="gradient-bg text-white border-none text-lg px-6 py-2">
                      EXCLUSIVE OFFER: Limited-Time Referral Promo!
                    </Badge>
                    
                    <h2 className="text-3xl font-bold md:text-4xl">
                      We're currently running a 1-month promo!
                    </h2>
                    
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

                    <Button size="lg" className="text-xl h-16 px-12 gradient-bg text-white border-none">
                      <DollarSign className="mr-2 h-6 w-6" />
                      JOIN THE HISNAK PROGRAM NOW
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-20">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold md:text-5xl">
                What You Get With This Program
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {programBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-background/60 rounded-lg border">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold md:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-md bg-background/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3">{faq.question}</h4>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold md:text-5xl">
                Don't Miss This Opportunity
              </h2>
              <p className="text-xl text-muted-foreground">
                Your journey to passive income starts now — and it's just a click away.
              </p>
              
              <Button size="lg" className="text-xl h-16 px-12 gradient-bg text-white border-none" asChild>
                <a href="#payment">
                  <DollarSign className="mr-2 h-6 w-6" />
                  Secure Your Spot - Pay ₦2,000 Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
              
              <div className="p-6 bg-background/60 rounded-xl border">
                <p className="text-muted-foreground">
                  <strong>PS:</strong> If you're already making enough income and feel that this passive income opportunity may not be for you – we completely understand. However, if you know someone who could benefit from an extra stream of income or is actively looking for an online job or business opportunity, we would truly appreciate it if you could introduce this passive income opportunity to them. Your referral could change someone's life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}