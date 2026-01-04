'use client';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="w-full relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-widest text-foreground">
            Harsh Singh
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary font-mono">
            AI Developer & Automation Engineer
          </p>
          <p className="mt-8 max-w-2xl text-muted-foreground">
            Specializing in Agentic Workflows, LLM Integration, and creating intelligent systems that drive efficiency and innovation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" asChild>
              <Link href="https://drive.google.com/file/d/1KdOndczlPLwjmCWybZZwK9Lf5co5xOXH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                <Send className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
