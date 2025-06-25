import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hisnak Marketplace - The Future of Affiliate Industry',
  description: 'AI-powered affiliate networking marketplace connecting vendors, affiliates, and customers worldwide. Learn → Apply → Earn → Scale.',
  keywords: 'affiliate marketing, digital products, passive income, network marketing, e-commerce',
  openGraph: {
    title: 'Hisnak Marketplace - AI-Powered Affiliate Networking',
    description: 'Join the future of affiliate industry with our innovative marketplace platform.',
    type: 'website',
    url: 'https://hisnak.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}