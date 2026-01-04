import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('w-full py-20 md:py-28', className)}
      {...props}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-12">
          <div className="space-y-4">
             {subtitle && (
              <p className="max-w-[900px] text-primary font-mono text-sm uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline uppercase">
              {title}
            </h2>
            <div className="w-24 h-1 bg-primary/50 mx-auto rounded-full"></div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
