import Link from 'next/link';
import { FOOTER_LINKS } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-20 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Harsh Singh. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {FOOTER_LINKS.map((social) => (
            <Button
              key={social.href}
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:bg-accent hover:text-primary"
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
