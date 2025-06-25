"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
  UserPlus, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock,
  User,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  Shield,
  Users,
  Building,
  UserCheck
} from 'lucide-react';

const userRoles = [
  { value: 'customer', label: 'Customer', icon: Users, description: 'Browse and purchase products', fee: 'Free' },
  { value: 'affiliate', label: 'Affiliate Networker', icon: UserCheck, description: 'Promote products and earn commissions', fee: 'Free' },
  { value: 'vendor', label: 'Vendor', icon: Building, description: 'Sell your digital products', fee: 'Free (10% per sale)' }
];

const countries = [
  'Nigeria', 'United States', 'United Kingdom', 'Canada', 'Australia', 
  'Germany', 'France', 'South Africa', 'Ghana', 'Kenya', 'Other'
];

const languages = [
  'English', 'French', 'Spanish', 'German', 'Portuguese', 'Arabic', 
  'Swahili', 'Yoruba', 'Igbo', 'Hausa', 'Other'
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Account Type
    role: '',
    
    // Step 2: Personal Info
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    country: '',
    address: '',
    language: '',
    
    // Step 3: Security
    password: '',
    confirmPassword: '',
    
    // Step 4: Agreement
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle registration logic here
      console.log('Registration attempt:', formData);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.role !== '';
      case 2:
        return formData.fullName && formData.email && formData.phone && 
               formData.gender && formData.country && formData.address && formData.language;
      case 3:
        return formData.password && formData.confirmPassword && 
               formData.password === formData.confirmPassword;
      case 4:
        return formData.agreeTerms && formData.agreePrivacy;
      default:
        return false;
    }
  };

  const selectedRole = userRoles.find(role => role.value === formData.role);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <Badge className="gradient-bg text-white border-none">
              Join Hisnak Marketplace
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight">
              Create Your Free Account
            </h1>
            <p className="text-muted-foreground">
              Start your journey to financial freedom with our affiliate networking platform
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-8 h-1 mx-2 ${
                    step < currentStep ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <Card className="border-0 shadow-lg bg-background/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserPlus className="h-5 w-5 text-primary" />
                <span>
                  Step {currentStep}: {
                    currentStep === 1 ? 'Account Type' :
                    currentStep === 2 ? 'Personal Information' :
                    currentStep === 3 ? 'Security' : 'Agreement'
                  }
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Account Type */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <Label>Choose Your Account Type</Label>
                    <div className="grid gap-4">
                      {userRoles.map((role) => (
                        <div
                          key={role.value}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.role === role.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => handleInputChange('role', role.value)}
                        >
                          <div className="flex items-center space-x-3">
                            <role.icon className="h-6 w-6 text-primary" />
                            <div className="flex-1">
                              <div className="font-medium">{role.label}</div>
                              <div className="text-sm text-muted-foreground">{role.description}</div>
                            </div>
                            <Badge variant="outline">{role.fee}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    {selectedRole?.value === 'affiliate' && (
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <p className="text-sm text-green-800 dark:text-green-200">
                          <strong>Affiliate Networker:</strong> Join for free and start earning commissions 
                          immediately! Get access to all products, training materials, and affiliate tools.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: Personal Information */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name (as in bank account)</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country of Residence</Label>
                        <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country.toLowerCase()}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="language">Preferred Language</Label>
                        <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            {languages.map((language) => (
                              <SelectItem key={language} value={language.toLowerCase()}>
                                {language}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Home Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea
                          id="address"
                          placeholder="Enter your complete home address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="pl-10 min-h-[80px]"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Security */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className="pl-10 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className="pl-10 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-0 top-0 h-full px-3"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <p className="text-sm text-destructive">Passwords do not match</p>
                    )}

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Password should be at least 8 characters long and include uppercase, 
                        lowercase, numbers, and special characters.
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 4: Agreement */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeTerms}
                          onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                          I agree to the{' '}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{' '}
                          and understand the commission structure and platform policies.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="privacy"
                          checked={formData.agreePrivacy}
                          onCheckedChange={(checked) => handleInputChange('agreePrivacy', checked as boolean)}
                        />
                        <Label htmlFor="privacy" className="text-sm leading-relaxed">
                          I agree to the{' '}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>{' '}
                          and consent to data processing for platform operations.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="marketing"
                          checked={formData.agreeMarketing}
                          onCheckedChange={(checked) => handleInputChange('agreeMarketing', checked as boolean)}
                        />
                        <Label htmlFor="marketing" className="text-sm leading-relaxed">
                          I would like to receive marketing communications, product updates, 
                          and promotional offers from Hisnak Marketplace.
                        </Label>
                      </div>
                    </div>

                    {selectedRole && (
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <h4 className="font-medium mb-2">Account Summary</h4>
                        <div className="space-y-1 text-sm">
                          <p><strong>Account Type:</strong> {selectedRole.label}</p>
                          <p><strong>Registration Fee:</strong> {selectedRole.fee}</p>
                          <p><strong>Email:</strong> {formData.email}</p>
                          <p><strong>Country:</strong> {formData.country}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex space-x-4">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex-1"
                    >
                      Previous
                    </Button>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="flex-1" 
                    disabled={!canProceed()}
                  >
                    {currentStep === 4 ? 'Create Account' : 'Continue'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>

              {currentStep === 1 && (
                <div className="mt-6">
                  <Separator className="my-6" />
                  <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary font-medium hover:underline">
                      Sign in here
                    </Link>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}