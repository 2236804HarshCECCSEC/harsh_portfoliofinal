import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Harsh Singh | AI Developer & Automation Engineer',
  description:
    'Portfolio of Harsh Singh, an AI Developer & Automation Engineer showcasing skills in Agentic Workflows, LLM Integration, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn('font-body antialiased bg-background text-foreground')}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
