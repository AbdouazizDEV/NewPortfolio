import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Github, Briefcase } from 'lucide-react';

type ExperienceLink = {
  href: string;
  label: string;
};

type ExperienceItem = {
  id: number;
  period: string;
  company: string;
  position: string;
  project: string;
  technologies: string[];
  description: string;
  achievements: string[];
  links?: ExperienceLink[];
  github?: string;
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      period: 'Mars 2026',
      company: 'DIZIGROUP',
      position: 'Développeur Full-Stack & Responsable technique',
      project: 'Pilotage technique et développement de la plateforme Quizz+',
      technologies: ['React Native', 'Expo', 'React.js', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
      links: [
        {
          href: 'https://quizzp.com/',
          label: 'Voir le site web'
        },
        {
          href: 'https://res.cloudinary.com/dhivn2ahm/video/upload/v1780414312/WhatsApp_Video_2026-06-02_at_15.15.12_tsutdv.mp4',
          label: 'Voir la démo vidéo'
        }
      ],
      description: 'Pilotage de l\'architecture technique, développement de solutions numériques, encadrement des équipes et garantie de la qualité des livrables. Réalisation de l\'application mobile Quizz+ et de son site web.',
      achievements: [
        'Cadrage de l\'architecture et suivi de la qualité des livrables',
        'Encadrement des équipes de développement',
        'Application Quizz+ déployable sur iOS et Android avec React Native et Expo',
        'Site web Quizz+ en React.js et Tailwind CSS'
      ]
    },
    {
      id: 0,
      period: 'Août 2026 - En cours',
      company: 'DIZIGROUP',
      position: 'Développeur Full-Stack & Responsable technique',
      project: 'Pilotage technique et développement de la plateforme web Kondaktor ',
      technologies: ['Angular', 'NestJS', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      links: [
        {
          href: 'https://kondaktor.com/',
          label: 'Voir le site web'
        }
      ],
      description: 'Pilotage technique et développement de la plateforme web Kondaktor, une plateforme de gestion de projets et de tâches.',
      achievements: [
        'Cadrage de l\'architecture et suivi de la qualité des livrables',
        'Encadrement des équipes de développement',
        'Application Kondaktor en Angular et NestJS',
        'Site web Kondaktor en Angular et Tailwind CSS'
      ]
    },
    {
      id: 2,
      period: 'Avril 2026 – Juin 2026 (Freelance)',
      company: 'Jant Tech',
      position: 'Développeur Mobile',
      project: 'La Cuisine de Maman, Jant-couvoir et Let\'s GO',
      technologies: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'SCSS'],
      links: [
        {
          href: 'https://res.cloudinary.com/dhivn2ahm/video/upload/v1775995317/WhatsApp_Video_2026-04-12_at_11.59.07_yiuhky.mp4',
          label: 'Démo La Cuisine de Maman'
        }
      ],
      description: 'Réalisation d\'applications mobiles pour Jant Tech, dont La Cuisine de Maman (restaurant), Jant-couvoir et Let\'s GO, avec Ionic et une expérience pensée pour un usage mobile.',
      achievements: [
        'Application La Cuisine de Maman en Ionic, Angular et TypeScript',
        'Applications Jant-couvoir et Let\'s GO',
        'Déploiement iOS et Android via Capacitor',
        'Interfaces adaptées aux usages terrain'
      ]
    },
    {
      id: 3,
      period: 'Mai 2026 (Freelance)',
      company: 'Kahfi SN',
      position: 'Développeur Full-Stack',
      project: 'Helping Yourself (HYS) — Plateforme digitale',
      technologies: ['Ionic', 'Angular', 'NestJS', 'React.js', 'TypeScript', 'Capacitor', 'SCSS'],
      links: [
        { href: 'https://helping-yourself.com/', label: 'Voir le site web' },
        { href: 'https://bo.helping-yourself.com/', label: 'Voir le back-office' },
        { href: 'https://api.helping-yourself.com/docs/', label: 'Documentation API' },
        {
          href: 'https://res.cloudinary.com/dhivn2ahm/video/upload/v1780413497/WhatsApp_Video_2026-06-02_at_15.14.37_rpaskh.mp4',
          label: 'Démo application mobile'
        }
      ],
      description: 'Helping Yourself est une plateforme web et mobile qui centralise des services d\'accompagnement, avec un paiement unifié et un suivi des demandes en temps réel.',
      achievements: [
        'Backend NestJS et interfaces React.js / Angular',
        'Application mobile hybride avec Ionic et Capacitor',
        'Back-office et documentation d\'API',
        'Gestion des rôles, des permissions et des parcours utilisateurs'
      ]
    },
    {
      id: 4,
      period: 'Février 2026 (Freelance)',
      company: 'Freelance',
      position: 'Développeur Full-Stack',
      project: 'Forum des Territoires — refonte du site',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
      links: [{ href: 'https://forumdesterritoires.com/', label: 'Voir le site' }],
      description: 'Refonte complète du site du Forum des Territoires, édition 2026, qui se tient à Bruxelles du 3 au 6 juin 2026.',
      achievements: [
        'Refonte de l\'interface avec React.js et Tailwind CSS',
        'API Node.js et Express.js',
        'Mise en page responsive et optimisation SEO',
        'Parcours clair pour un événement institutionnel'
      ]
    },
    {
      id: 5,
      period: 'Septembre 2025 – Novembre 2025 (CDD)',
      company: 'École au Sénégal (EAS)',
      position: 'Développeur Full-Stack',
      project: 'Plateforme éducative TaggatMa',
      technologies: ['Laravel 12', 'Angular', 'MySQL', 'Redis', 'Swagger', 'GitHub'],
      links: [
        { href: 'https://web-eas.taggatma.com/', label: 'Voir la plateforme' },
        { href: 'https://api-eas.taggatma.com/api/documentation#', label: 'Documentation API' }
      ],
      description: 'Création de la plateforme éducative TaggatMa : élèves, cours, professeurs et documents officiels.',
      achievements: [
        'Backend Laravel 12 et interface Angular',
        'Cache Redis et documentation Swagger',
        'Gestion des rôles et des permissions',
        'Sécurisation et optimisation des performances'
      ]
    },
    {
      id: 6,
      period: 'Août 2025',
      company: 'Xarala',
      position: 'Développeur Full-Stack',
      project: 'Plateforme d\'avance sur salaire',
      technologies: ['Next.js', 'NestJS', 'React Native', 'MySQL', 'GitLab'],
      description: 'Plateforme d\'avance sur salaire en trois volets : application mobile pour les employés, site web pour les entreprises et back-office d\'administration.',
      achievements: [
        'Application mobile React Native',
        'Site web et back-office avec Next.js',
        'API NestJS et base MySQL',
        'Versionnement et collaboration sur GitLab'
      ]
    },
    {
      id: 7,
      period: 'Mars 2025 – Avril 2025',
      company: 'Niane Technologie',
      position: 'Développeur Full-Stack',
      project: 'Assemblée Nationale du Sénégal et The Booker\'s',
      technologies: ['Laravel', 'Angular 18', 'PostgreSQL', 'Supabase', 'MySQL', 'GitLab', 'LWS'],
      links: [
        { href: 'https://www.assemblee.sn/fr', label: 'Assemblée Nationale' },
        { href: 'https://bo-thebookers.nianetechnologies.com/', label: 'The Booker\'s' }
      ],
      description: 'Contribution à la plateforme de l\'Assemblée Nationale du Sénégal, puis mise en place de The Booker\'s, application de réservation de tables pour restaurants.',
      achievements: [
        'Plateforme institutionnelle pour députés et ministères',
        'Réservation de tables et back-office restaurateur',
        'API, bases PostgreSQL, MySQL et Supabase',
        'Livraison et versionnement avec GitLab et LWS'
      ]
    },
    {
      id: 8,
      period: 'Octobre 2024 (Freelance)',
      company: 'Freelance',
      position: 'Développeur Full-Stack',
      project: 'Réseau social pour tailleurs',
      technologies: ['Node.js', 'React.js', 'Prisma', 'MongoDB', 'Cloudinary', 'MySQL'],
      github: 'https://github.com/Bakemono-san/socialtailorapp-react',
      description: 'Plateforme sociale pour tailleurs : partage de créations, mise en relation client-tailleur et suivi des commandes.',
      achievements: [
        'API Node.js et interface React',
        'Messagerie et galerie de créations',
        'Médias hébergés avec Cloudinary'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#f4f1ea]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 mb-3">Parcours</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#14241c]">Expériences professionnelles</h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            Du mobile Ionic aux plateformes institutionnelles, avec un rôle de responsable technique chez DIZIGROUP.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-emerald-900/15" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.2) }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-7 h-3.5 w-3.5 rounded-full border-[3px] border-[#f4f1ea] bg-emerald-800 shadow-sm" />

                <div className="rounded-3xl border border-stone-200/80 bg-white p-6 md:p-8 shadow-[0_18px_40px_-28px_rgba(20,36,28,0.45)]">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-4">
                    <span className="inline-flex items-center font-medium text-emerald-800">
                      <Calendar size={15} className="mr-1.5" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center text-stone-500">
                      <Briefcase size={15} className="mr-1.5" />
                      {exp.company}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-[#14241c]">{exp.position}</h3>
                  <p className="mt-1 text-emerald-800 font-medium">{exp.project}</p>
                  <p className="mt-4 text-stone-600 leading-relaxed">{exp.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start text-sm text-stone-600">
                        <span className="mt-2 mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {(exp.links?.length || exp.github) && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.links?.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full bg-emerald-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-900"
                        >
                          <ExternalLink size={14} className="mr-2" />
                          {link.label}
                        </a>
                      ))}
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50"
                        >
                          <Github size={14} className="mr-2" />
                          Code source
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
