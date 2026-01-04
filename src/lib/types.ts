export type Skill = {
  id: string;
  name: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  tools: string[];
};

export type Experience = {
  id: string;
  type: 'work' | 'education' | 'certification';
  title: string;
  institution: string;
  duration: string;
  description: string | string[];
  score?: string;
};
