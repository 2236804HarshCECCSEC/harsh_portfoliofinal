'use client';

import { SectionWrapper } from './section-wrapper';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { Check } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Driven LinkedIn Job Search & Resume Matching Automation',
    description: 'An automated system to find and evaluate job opportunities.',
    outcomes: [
      'Developed an automated n8n workflow to trigger daily job searches based on user-defined filters and keywords.',
      'Integrated Google Drive and OCR tools to extract and process resume data for real-time profile analysis.',
      'Utilized AI agents to score job descriptions against candidate skills, generating personalized match ratings.',
      'Automated data logging to Google Sheets and configured Discord notifications for high-scoring job opportunities.',
    ],
    tools: ['n8n', 'Google Drive', 'OCR', 'AI Agents', 'Google Sheets', 'Discord'],
  },
  {
    id: '2',
    title: 'Sales Data Analysis & Excel Automation Using Pivot Tables and Power Query',
    description: 'An end-to-end project to analyze and visualize sales data.',
    outcomes: [
        'Cleaned, validated, and transformed raw sales data using Power Query.',
        'Performed exploratory data analysis (EDA) to identify sales trends and performance gaps.',
        'Automated ETL workflows to standardize datasets and improve reporting efficiency.',
        'Designed dynamic Pivot Tables and Excel dashboards to analyze revenue, region-wise sales, and product performance.'
    ],
    tools: ['Excel', 'Power Query', 'Pivot Tables', 'Data Analysis', 'ETL Automation'],
  }
];

export function Projects() {
  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="group flex flex-col overflow-hidden rounded-lg border-border/30 bg-card/50 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:-translate-y-2">
      <CardHeader>
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="pt-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <h4 className="font-semibold text-muted-foreground">Key Outcomes:</h4>
        <ul className="space-y-2">
          {project.outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary/70" />
              <span className="text-sm text-muted-foreground">{outcome}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Badge key={tool} variant="outline" className="border-primary/20 text-primary/80 bg-primary/10 font-mono">
              {tool}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <SectionWrapper
      id="projects"
      title="Latest Work"
      subtitle="A selection of my work, demonstrating practical application of my skills."
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
