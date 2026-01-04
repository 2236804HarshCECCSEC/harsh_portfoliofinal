'use client';
import { SKILL_ICONS } from '@/lib/data';
import { SectionWrapper } from './section-wrapper';
import { Card } from '@/components/ui/card';
import type { Skill } from '@/lib/types';

const skills: Skill[] = [
  { id: '1', name: 'Data Cleaning' },
  { id: '2', name: 'EDA' },
  { id: '3', name: 'Data Validation' },
  { id: '4', name: 'Python' },
  { id: '5', name: 'Pandas' },
  { id: '6', name: 'NumPy' },
  { id: '7', name: 'Matplotlib' },
  { id: '8', name: 'MySQL' },
  { id: '9', name: 'MongoDB' },
  { id: '10', name: 'Excel Dashboards' },
  { id: '11', name: 'Power BI' },
  { id: '12', name: 'Pivot Tables' },
  { id: '13', name: 'Power Query' },
  { id: '14', name: 'Data Transformation' },
  { id: '15', name: 'Automated Reporting' },
  { id: '16', name: 'n8n' },
  { id: '17', name: 'OpenAI / Gemini API' },
  { id: '18', name: 'Prompt Engineering' },
];

export function Skills() {
  const SkillCard = ({ skill }: { skill: Skill }) => {
    const Icon = SKILL_ICONS[skill.name] || SKILL_ICONS.default;
    return (
      <Card className="group flex flex-col items-center justify-center gap-3 rounded-lg border-border/30 bg-card/50 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:-translate-y-1">
        <div className="rounded-lg bg-secondary p-3 transition-colors group-hover:bg-primary/10">
          <Icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
        <h3 className="text-md font-medium text-foreground">{skill.name}</h3>
      </Card>
    );
  };

  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="A collection of tools and technologies I use to turn data into insights."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </SectionWrapper>
  );
}
