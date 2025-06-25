import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container">
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-6 bg-primary rounded-full"></div>
                <div className="w-3 h-6 bg-accent rounded-full"></div>
                <div className="w-3 h-6 bg-yellow-500 rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-primary">Hisnak</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The future of affiliate industry. Empowering entrepreneurs through 
              AI-powered networking and innovative e-commerce solutions.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="/affiliate-program" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Become an Affiliate
              </Link>
              <Link href="/vendor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Are You a Vendor?
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product Categories</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/products/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skill-Based Products
              </Link>
              <Link href="/products/information" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Information Products
              </Link>
              <Link href="/products/education" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Educational Programs
              </Link>
              <Link href="/products/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Event Tickets
              </Link>
              <Link href="/products/software" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                App Software
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and opportunities.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" type="email" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@hisnak.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Hisnak Marketplace. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}