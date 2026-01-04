import Link from 'next/link';
import { CONTACT, SOCIAL_LINKS } from '@/lib/data';
import { SectionWrapper } from './section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="I'm open to new opportunities and collaborations. Feel free to reach out."
    >
      <div className="mx-auto max-w-xl">
        <Card className="border-border/30 bg-card/50 shadow-lg relative overflow-hidden backdrop-blur-sm">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/10"></div>
           <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-grid-pattern opacity-5"></div>
          <CardContent className="relative flex flex-col items-center gap-6 p-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-2xl font-bold tracking-wider text-foreground transition-colors hover:text-primary"
              >
                {CONTACT.email}
              </a>
              <p className="font-mono text-lg text-muted-foreground">{CONTACT.phone}</p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              {SOCIAL_LINKS.map((social) => (
                <Button
                  key={social.href}
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-16 w-16 rounded-full border-primary/20 bg-transparent text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-7 w-7" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
