"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  GraduationCap, 
  TrendingUp, 
  Handshake,
  Target,
  Globe
} from 'lucide-react';

const sdgs = [
  {
    number: 1,
    title: 'No Poverty',
    description: 'The Hisnak Affiliate Networking Program empowers low-income earners, the unemployed, students, stay-at-home parents and more to learn skills that teach how to generate passive income through affiliate networking, helping to alleviate poverty.',
    icon: Users,
    color: 'text-red-600',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-200'
  },
  {
    number: 4,
    title: 'Quality Education',
    description: 'Through training and mentorship, the Hisnak Program equips members with digital marketing skills, enhancing financial literacy and career growth.',
    icon: GraduationCap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-200'
  },
  {
    number: 8,
    title: 'Decent Work and Economic Growth',
    description: 'The program promotes self-employment and sustainable digital business models, creating financial independence.',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-200'
  },
  {
    number: 10,
    title: 'Reduced Inequalities',
    description: 'Hisnak Program enables equal earning opportunities for people based on their performances and regardless of their socioeconomic background.',
    icon: Handshake,
    color: 'text-green-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-200'
  }
];

export function SDGSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            UN Sustainable Development Goals
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Supporting Global{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              Sustainable Development
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            The United Nations Sustainable Development Goals (SDGs) are a key part of the 
            2030 Agenda for Sustainable Development. The Hisnak Affiliate Networking Program 
            has identified four key SDGs that align with its mission and actively supports 
            them by promoting digital entrepreneurship, economic empowerment, and financial 
            education to create sustainable opportunities for individuals worldwide.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
          {sdgs.map((sdg) => (
            <Card key={sdg.number} className={`border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-background/60 backdrop-blur-sm ${sdg.borderColor} border-l-4`}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${sdg.bgColor}`}>
                    <sdg.icon className={`h-8 w-8 ${sdg.color}`} />
                  </div>
                  <div className="space-y-1">
                    <Badge variant="outline" className="w-fit">
                      SDG {sdg.number}
                    </Badge>
                    <CardTitle className="text-xl">{sdg.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {sdg.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Our Global Mission</h3>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our mission aligns with these SDGs to create meaningful impact. Through our 
                affiliate networking platform, we're building a sustainable ecosystem that 
                empowers individuals worldwide to achieve financial independence while 
                contributing to global development goals.
              </p>
              
              <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-sm">Economic Empowerment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-accent" />
                  <span className="text-sm">Financial Education</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm">Skills Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Equal Opportunities</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}