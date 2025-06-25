"use client";

import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "How does the affiliate commission system work?",
    answer: "Our transparent commission structure distributes earnings as follows: 50% goes to the affiliate who made the sale, 10% to the upline affiliate who recruited them, 30% to the product vendor, and 10% to the Hisnak platform. This ensures fair compensation for all parties involved."
  },
  {
    question: "What is the minimum payout threshold?",
    answer: "There is no minimum payout threshold for affiliates. Commissions are automatically processed and deposited into your bank account every Saturday. For vendors, payouts are processed biweekly on Fridays."
  },
  {
    question: "How do I track my affiliate performance?",
    answer: "Every affiliate receives access to a comprehensive dashboard that tracks clicks, conversions, commissions earned, and downline performance in real-time. You'll also have access to detailed analytics and reporting tools."
  },
  {
    question: "What types of products can vendors list?",
    answer: "We accept skill-based products/courses, information products, educational programs, event tickets, and app software. All products must be original creations by the vendor and meet our quality standards through manual review."
  },
  {
    question: "Is there a cost to join as an affiliate?",
    answer: "Yes, there is a one-time ₦10,000 lifetime subscription fee to join as an affiliate networker. This gives you access to all products, training materials, and affiliate tools on the platform."
  },
  {
    question: "How does the referral system work?",
    answer: "When you refer someone to join as an affiliate, you earn 10% commission from all their future sales. This creates a passive income stream from your downline network while helping others succeed."
  },
  {
    question: "What support is provided to affiliates?",
    answer: "We provide comprehensive training, mentorship, marketing materials, promotional tools, and ongoing support. This includes banners, email templates, product descriptions, and access to our affiliate community."
  },
  {
    question: "How are payments processed?",
    answer: "We support multiple payment gateways including Paystack, Flutterwave, Stripe, PayPal, and bank transfers. Payments are processed securely with automatic commission distribution to all parties."
  }
];

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge className="gradient-bg text-white border-none">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Got Questions?{" "}
            <span className="text-transparent bg-clip-text gradient-bg">
              We've Got Answers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our affiliate networking platform, 
            commission structure, and how to get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-background/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a 
              href="mailto:support@hisnak.com" 
              className="text-primary font-semibold hover:underline"
            >
              Contact our support team →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}