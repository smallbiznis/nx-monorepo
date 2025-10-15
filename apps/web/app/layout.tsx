import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import './globals.css';

import { cn } from '@ui/lib/cn';
import { ThemeProvider } from '@ui/theme-provider';
import { Toaster as RadixToaster } from '@ui/components/ui/toaster';
import { SonnerToaster } from '@ui/components/ui/sonner';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Nx Monorepo Web App',
  description: 'Next.js app powered by Nx, Tailwind, and shadcn/ui.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <RadixToaster />
          <SonnerToaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
