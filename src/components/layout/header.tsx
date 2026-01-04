'use client';

import * as React from 'react';
import Link from 'next/link';
import { Code, Menu, X } from 'lucide-react';
import { NAV_LINKS, FOOTER_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = () => (
    <>
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  const SocialLinks = () => (
    <div className="flex items-center gap-2">
      {FOOTER_LINKS.map((social) => (
        <Button
          key={social.href}
          variant="ghost"
          size="icon"
          asChild
          className="text-muted-foreground hover:bg-accent hover:text-primary"
        >
          <Link href={social.href} target="_blank" rel="noopener noreferrer">
            <social.icon className="h-5 w-5" />
            <span className="sr-only">{social.label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300',
        isScrolled
          ? 'border-border/60 bg-background/80 shadow-md backdrop-blur-lg'
          : ''
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold group"
        >
          <div className="p-2 border-2 border-primary rounded-full group-hover:bg-primary transition-colors duration-300">
            <Code className="h-6 w-6 text-primary group-hover:text-background" />
          </div>
          <span className="text-xl font-headline tracking-wider">HARSH</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="flex flex-col items-center gap-8 mt-16">
                <SheetClose asChild>
                  <NavContent />
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden items-center gap-8 md:flex">
            <NavContent />
          </nav>
        )}

        {!isMobile && <SocialLinks />}
      </div>
    </header>
  );
}
