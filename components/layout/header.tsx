"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  Users, 
  BookOpen, 
  Calendar,
  Laptop,
  GraduationCap,
  Smartphone,
  LogIn,
  UserPlus,
  Info,
  Rss,
  Mail,
  DollarSign,
  Home
} from 'lucide-react';

const productCategories = [
  { name: 'Skill-Based Products', icon: GraduationCap, href: '/products/skills' },
  { name: 'Information Products', icon: BookOpen, href: '/products/information' },
  { name: 'Educational Programs', icon: GraduationCap, href: '/products/education' },
  { name: 'Event Tickets', icon: Calendar, href: '/products/events' },
  { name: 'App Software', icon: Smartphone, href: '/products/software' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-6 bg-primary rounded-full"></div>
                <div className="w-3 h-6 bg-accent rounded-full"></div>
                <div className="w-3 h-6 bg-yellow-500 rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-primary">Hisnak Marketplace</span>
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/learn-earn" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Learn N' Earn
                      <Badge variant="secondary" className="ml-2 bg-gradient-to-r from-primary to-accent text-white">Hot</Badge>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about-program" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      About Hisnak Program
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Learn N' Earn Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Affiliate Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {productCategories.map((category) => (
                        <li key={category.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={category.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center space-x-2">
                                <category.icon className="h-4 w-4" />
                                <div className="text-sm font-medium leading-none">{category.name}</div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>More</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md gradient-bg p-6 no-underline outline-none focus:shadow-md"
                            href="/about"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Hisnak Marketplace
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              The future of affiliate industry. Learn → Apply → Earn → Scale.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">About Us</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about our mission to transform lives through networking.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/affiliate-program" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Become an Affiliate</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Join our affiliate networking program and start earning.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="/vendor" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Are You a Vendor?</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              List your products and reach global affiliates.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
              <Button asChild>
                <Link href="/register">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Create Free Account
                </Link>
              </Button>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Main Navigation</SheetTitle>
                <nav className="flex flex-col space-y-4">
                  <Link href="/login" className="flex items-center space-x-2 text-lg font-medium">
                    <LogIn className="h-5 w-5" />
                    <span>Login</span>
                  </Link>
                  <Link href="/register" className="flex items-center space-x-2 text-lg font-medium">
                    <UserPlus className="h-5 w-5" />
                    <span>Create Free Account</span>
                  </Link>
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Main Pages</h4>
                    <Link href="/learn-earn" className="flex items-center space-x-2 py-2 text-sm text-muted-foreground hover:text-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span>Learn N' Earn</span>
                      <Badge variant="secondary" className="ml-auto bg-gradient-to-r from-primary to-accent text-white text-xs">Hot</Badge>
                    </Link>
                    <Link href="/" className="flex items-center space-x-2 py-2 text-sm text-muted-foreground hover:text-foreground">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                    <Link href="/about-program" className="flex items-center space-x-2 py-2 text-sm text-muted-foreground hover:text-foreground">
                      <Info className="h-4 w-4" />
                      <span>About Hisnak Program</span>
                    </Link>
                    <Link href="/blog" className="flex items-center space-x-2 py-2 text-sm text-muted-foreground hover:text-foreground">
                      <Rss className="h-4 w-4" />
                      <span>Learn N' Earn Blog</span>
                    </Link>
                    <Link href="/contact" className="flex items-center space-x-2 py-2 text-sm text-muted-foreground hover:text-foreground">
                      <Mail className="h-4 w-4" />
                      <span>Contact Us</span>
                    </Link>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Product Categories</h4>
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-center space-x-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <category.icon className="h-4 w-4" />
                        <span>{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}