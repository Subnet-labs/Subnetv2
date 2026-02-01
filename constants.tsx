
import { Project, Service, Testimony } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina E-commerce',
    category: 'Web Design & Strategy',
    image: 'https://picsum.photos/seed/lumina/1200/800',
    description: 'Transforming a local boutique into a global powerhouse with 300% growth.'
  },
  {
    id: '2',
    title: 'Zenith FinTech',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/zenith/1200/800',
    description: 'Simplifying complex financial data into intuitive, human-centered experiences.'
  },
  {
    id: '3',
    title: 'Aura Lifestyle',
    category: 'Brand Identity',
    image: 'https://picsum.photos/seed/aura/1200/800',
    description: 'Crafting a visual language that resonates with modern minimalist aesthetics.'
  },
  {
    id: '4',
    title: 'Nexus SaaS',
    category: 'Full Stack Development',
    image: 'https://picsum.photos/seed/nexus/1200/800',
    description: 'Building robust, scalable infrastructure for the next generation of team collaboration.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Brand Identity Creation',
    description: 'Crafting unique and memorable brand identities that stand the test of time.'
  },
  {
    id: 's2',
    title: 'Web & Mobile Design',
    description: 'Ensuring intuitive and delightful user experiences across all platforms.'
  },
  {
    id: 's3',
    title: 'Conversion Optimization',
    description: 'Turning casual browsers into loyal customers through psychological design patterns.'
  }
];

export const TESTIMONIALS: Testimony[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'CEO, Lumina',
    content: 'The team at Infinite didn\'t just build a website; they built a revenue engine. Our sales doubled in the first three months.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 't2',
    name: 'Mark Verdon',
    role: 'Founder, Aura',
    content: 'Their eye for detail and commitment to visual excellence is unmatched. They understood our brand vision perfectly.',
    avatar: 'https://picsum.photos/seed/mark/100/100'
  }
];
