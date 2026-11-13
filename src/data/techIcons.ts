import type { IconType } from 'react-icons';
import {
  SiAngular,
  SiCapacitor,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGitlab,
  SiIonic,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSass,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { Layers, Server } from 'lucide-react';

export type TechMeta = {
  icon: IconType;
  color: string;
  label: string;
};

const TECH_MAP: Record<string, TechMeta> = {
  'next.js': { icon: SiNextdotjs, color: '#111827', label: 'Next.js' },
  'react.js': { icon: SiReact, color: '#61DAFB', label: 'React.js' },
  reactjs: { icon: SiReact, color: '#61DAFB', label: 'React.js' },
  'react native': { icon: SiReact, color: '#61DAFB', label: 'React Native' },
  typescript: { icon: SiTypescript, color: '#3178C6', label: 'TypeScript' },
  'tailwind css': { icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind CSS' },
  angular: { icon: SiAngular, color: '#DD0031', label: 'Angular' },
  'angular 18': { icon: SiAngular, color: '#DD0031', label: 'Angular 18' },
  'angular 19': { icon: SiAngular, color: '#DD0031', label: 'Angular 19' },
  nestjs: { icon: SiNestjs, color: '#E0234E', label: 'NestJS' },
  'nest.js': { icon: SiNestjs, color: '#E0234E', label: 'NestJS' },
  'node.js': { icon: SiNodedotjs, color: '#5FA04E', label: 'Node.js' },
  'express.js': { icon: SiExpress, color: '#000000', label: 'Express.js' },
  expo: { icon: SiExpo, color: '#000000', label: 'Expo' },
  ionic: { icon: SiIonic, color: '#3880FF', label: 'Ionic' },
  capacitor: { icon: SiCapacitor, color: '#119EFF', label: 'Capacitor' },
  scss: { icon: SiSass, color: '#CC6699', label: 'SCSS' },
  laravel: { icon: SiLaravel, color: '#FF2D20', label: 'Laravel' },
  'laravel 11': { icon: SiLaravel, color: '#FF2D20', label: 'Laravel 11' },
  'laravel 12': { icon: SiLaravel, color: '#FF2D20', label: 'Laravel 12' },
  mysql: { icon: SiMysql, color: '#4479A1', label: 'MySQL' },
  postgresql: { icon: SiPostgresql, color: '#4169E1', label: 'PostgreSQL' },
  mongodb: { icon: SiMongodb, color: '#47A248', label: 'MongoDB' },
  redis: { icon: SiRedis, color: '#DC382D', label: 'Redis' },
  swagger: { icon: SiSwagger, color: '#85EA2D', label: 'Swagger' },
  github: { icon: SiGithub, color: '#181717', label: 'GitHub' },
  gitlab: { icon: SiGitlab, color: '#FC6D26', label: 'GitLab' },
  git: { icon: SiGit, color: '#F05032', label: 'Git' },
  supabase: { icon: SiSupabase, color: '#3ECF8F', label: 'Supabase' },
  firebase: { icon: SiFirebase, color: '#FFCA28', label: 'Firebase' },
  docker: { icon: SiDocker, color: '#2496ED', label: 'Docker' },
  vite: { icon: SiVite, color: '#646CFF', label: 'Vite' },
  'prisma orm': { icon: SiPrisma, color: '#2D3748', label: 'Prisma ORM' },
  prisma: { icon: SiPrisma, color: '#2D3748', label: 'Prisma' },
  lws: { icon: Server, color: '#047857', label: 'LWS' },
  architecture: { icon: Layers, color: '#047857', label: 'Architecture' },
};

export function normalizeTechKey(tech: string): string {
  return tech.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function getTechMeta(tech: string): TechMeta {
  const key = normalizeTechKey(tech);
  return (
    TECH_MAP[key] ?? {
      icon: Layers,
      color: '#047857',
      label: tech,
    }
  );
}
