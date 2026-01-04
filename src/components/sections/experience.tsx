'use client';

import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { SectionWrapper } from './section-wrapper';
import { Badge } from '@/components/ui/badge';
import type { Experience } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ICONS = {
  work: <Briefcase className="h-5 w-5 text-muted-foreground" />,
  education: <GraduationCap className="h-5 w-5 text-muted-foreground" />,
  certification: <Award className="h-5 w-5 text-muted-foreground" />,
};

const experiences: Experience[] = [
  {
    id: '1',
    type: 'work',
    title: 'Data Analyst (Freelance)',
    institution: 'Freelance',
    duration: 'Jan 2025 – Present',
    description: [
        'Analyzed and cleaned 50,000+ records using Excel, SQL, and Python, improving data accuracy and reporting reliability.',
        'Built automated ETL workflows using Power Query, reducing manual reporting effort by 30%.',
        'Wrote optimized SQL queries using JOINs, GROUP BY, and subqueries to extract and aggregate business data.',
        'Developed Excel dashboards to track KPIs and support management decisions.'
    ]
  },
  {
    id: '2',
    type: 'education',
    title: 'Bachelors of Technology in Computer Science Engineering',
    institution: 'Chandigarh Engineering College, Landran',
    duration: '2022 - 2026',
    description: 'Currently pursuing a B.Tech degree with a focus on computer science principles.',
    score: '8.39 CGPA'
  },
  {
    id: '3',
    type: 'education',
    title: 'Intermediate (CBSE)',
    institution: 'Radhika Bal Vidya Mandir',
    duration: '2019 - 2020',
    description: 'Completed intermediate education with a focus on science and mathematics.',
  },
  {
    id: '4',
    type: 'education',
    title: 'Matriculation (CBSE)',
    institution: 'Radhika Bal Vidya Mandir',
    duration: '2017 - 2018',
    description: 'Completed high school education.',
  },
];


export function Experience() {
  const ExperienceItem = ({ item }: { item: Experience }) => (
    <div className="pl-12 relative group">
      <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary border border-border z-10 transition-colors duration-300 group-hover:border-primary">
        {ICONS[item.type as keyof typeof ICONS]}
      </div>
      <Card className="bg-card/50 border-border/30 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card/80">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-2">
             <p className="font-medium text-muted-foreground">
              {item.institution}
            </p>
            <Badge variant="outline" className="font-mono text-primary border-primary/30">
              {item.duration}
            </Badge>
          </div>
          <CardTitle className="text-xl pt-2 text-foreground">{item.title}</CardTitle>
           {item.score && <p className="font-mono text-sm text-primary">{item.score}</p>}
        </CardHeader>
        <CardContent>
          {Array.isArray(item.description) ? (
            <ul className="space-y-2 list-disc pl-4 text-sm">
              {item.description.map((desc, index) => (
                <li key={index} className="text-muted-foreground">{desc}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground text-sm">{item.description}</p>
          )}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <SectionWrapper
      id="experience"
      title="Experience & Education"
      subtitle="My professional journey and academic background."
    >
      <div className="relative mx-auto flex max-w-3xl flex-col gap-8">
        <div className="absolute left-[19px] top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
        {experiences?.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
}
