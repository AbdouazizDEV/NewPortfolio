import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { experiences, type ExperienceItem, type ExperienceLink, type ExperienceProject } from '../data/experiences';
import { experiencesEn } from '../data/experiences.en';

function localizeLinks(
  links: ExperienceLink[] | undefined,
  labels?: Record<string, string>
): ExperienceLink[] | undefined {
  if (!links) return undefined;
  return links.map((link) => ({
    ...link,
    label: labels?.[link.href] ?? link.label,
  }));
}

function localizeExperience(exp: ExperienceItem): ExperienceItem {
  const en = experiencesEn[exp.slug];
  if (!en) return exp;

  return {
    ...exp,
    period: en.period,
    position: en.position,
    project: en.project,
    description: en.description,
    companyAbout: en.companyAbout,
    location: en.location,
    contractType: en.contractType,
    achievements: en.achievements,
    responsibilities: en.responsibilities,
    links: localizeLinks(exp.links, en.linkLabels),
    projects: exp.projects.map((project, index): ExperienceProject => {
      const enProject = en.projects[index];
      if (!enProject) return project;
      return {
        ...project,
        title: enProject.title,
        role: enProject.role,
        summary: enProject.summary,
        links: localizeLinks(project.links, enProject.linkLabels),
      };
    }),
  };
}

export function useLocalizedExperiences(): ExperienceItem[] {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith('en');

  return useMemo(
    () => (isEn ? experiences.map(localizeExperience) : experiences),
    [isEn]
  );
}

export function useLocalizedExperience(slug?: string): ExperienceItem | undefined {
  const list = useLocalizedExperiences();
  return useMemo(() => list.find((item) => item.slug === slug), [list, slug]);
}
