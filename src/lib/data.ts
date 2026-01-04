import {
  Sheet,
  Database,
  Code,
  Filter,
  CheckSquare,
  BarChart3,
  ArrowRightLeft,
  LayoutDashboard,
  LucideIcon,
  Github,
  Linkedin,
  Mail,
  Phone,
  Book,
} from 'lucide-react';

export const SKILL_ICONS: { [key: string]: LucideIcon } = {
  'Data Cleaning': Filter,
  EDA: BarChart3,
  'Data Validation': CheckSquare,
  Python: Code,
  Pandas: Code,
  NumPy: Code,
  Matplotlib: BarChart3,
  MySQL: Database,
  MongoDB: Database,
  'Excel Dashboards': LayoutDashboard,
  'Power BI': LayoutDashboard,
  'Pivot Tables': Sheet,
  'Power Query': Filter,
  'Data Transformation': ArrowRightLeft,
  'Automated Reporting': ArrowRightLeft,
  Windows: Book,
  n8n: Code,
  'OpenAI / Gemini API': Code,
  'Dashboard Automation': LayoutDashboard,
  'Data-Driven Decision Making': BarChart3,
  'Prompt Engineering': Code,
  default: Code,
};

export const CONTACT = {
  email: 'harshnew8400@gmail.com',
  phone: '+918400638111',
  github: 'https://github.com/2236804HarshCECCSEC',
  linkedin: 'https://www.linkedin.com/in/harsh-singh-6198611bb/',
};

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export const SOCIAL_LINKS = [
  { href: `mailto:${CONTACT.email}`, icon: Mail, label: 'Email' },
  { href: CONTACT.github, icon: Github, label: 'GitHub' },
  { href: CONTACT.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `tel:${CONTACT.phone}`, icon: Phone, label: 'Phone' },
];

export const FOOTER_LINKS = [
  { href: CONTACT.github, icon: Github, label: 'GitHub' },
  { href: CONTACT.linkedin, icon: Linkedin, label: 'LinkedIn' },
];
