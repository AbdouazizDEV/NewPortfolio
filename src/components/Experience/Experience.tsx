import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Github, MapPin, Briefcase, BookOpen } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 0,
      period: 'Août 2025',
      company: 'Ecole au Sénégal (EAS)',
      position: 'Développeur Full-Stack',
      project: 'Mise en place de la platforme éducative TAGGAT MA',
      technologies: ['Laravel 12', 'Angular 18', 'Mysql','Redis','Vue.js','Swagger','GitLab'],
      link: 'https://web-eas.taggatma.com/',
      link2: 'https://api-eas.taggatma.com/api/documentation#',
      description: 'Développement de la plateforme éducatif TAGGAT MA, incluant la gestion des élèves, des cours, des professeurs et des documents officiels.',
      achievements: [
        'Architecture et développement du backend avec Laravel 12',
        'Interface utilisateur moderne avec Angular 18',
        'Optimisation des performances et sécurité renforcée',
        'Intégration avec les systèmes gouvernementaux existants',
        'Gestion des permissions et des rôles',
        'Gestion des projets',
      ]
    },
    {
      id: 1,
      period: 'Août 2025',
      company: 'Xarala',
      position: 'Développeur Full-Stack',
      project: 'Une solution fintech d\'avance sur salaire composée de trois composants principaux : 1. Application mobile pour les employés 2. Application web pour les entreprises 3. Application web pour l\'administration de la plateforme',
      technologies: ['Next.JS', 'Nest.JS', 'Mysql','React Native','Expo','GitLab'],
      description: 'Développement de la solution fintech d\'avance sur salaire composée de trois composants principaux : 1. Application mobile pour les employés 2. Application web pour les entreprises 3. Application web pour l\'administration de la plateforme.',
      achievements: [
        'Développement de l\'application mobile avec React Native et Expo',
        'Développement de l\'application web avec Next.JS et Nest.JS',
        'Développement de l\'application web pour l\'administration de la plateforme avec Next.JS et Nest.JS',
        'Développement de l\'API avec Nest.JS',
        'Développement de la base de données avec Mysql',
      ]
    },
    {
      id: 2,
      period: 'Avril 2025',
      company: 'Niane Technologie',
      position: 'Développeur Full-Stack',
      project: 'Plateforme Assemblée Nationale du Sénégal',
      technologies: ['Laravel 11', 'Angular 18', 'PostgreSQL', 'GitLab'],
      link: 'https://www.assemblee.sn/fr',
      description: 'Développement de la plateforme officielle de l\'Assemblée Nationale du Sénégal, incluant la gestion des députés, des sessions parlementaires et des documents officiels.',
      achievements: [
        'Architecture et développement du backend avec Laravel 11',
        'Interface utilisateur moderne avec Angular 18',
        'Optimisation des performances et sécurité renforcée',
        'Intégration avec les systèmes gouvernementaux existants'
      ]
    },
    {
      id: 3,
      period: 'Mars 2025',
      company: 'Niane Technologie',
      position: 'Développeur Full-Stack',
      project: 'The Booker\'s - Gestion de réservation',
      technologies: ['Laravel', 'Angular 18', 'Supabase', 'MySQL', 'GitLab', 'LWS'],
      link: 'https://bo-thebookers.nianetechnologies.com/',
      description: 'Plateforme complète de gestion de réservations pour restaurants avec interface client et back-office administrateur.',
      achievements: [
        'Système de réservation en temps réel',
        'Dashboard analytique pour les restaurateurs',
        'API RESTful robuste et documentée',
        'Déploiement automatisé avec CI/CD'
      ]
    },
    {
      id: 4,
      period: 'Décembre 2024',
      company: 'Freelance',
      position: 'Développeur Full-Stack',
      project: 'Âllo Docteur - Gestion RDV hospitaliers',
      technologies: ['Laravel', 'Node.js', 'Cloudinary', 'MySQL'],
      github: 'https://github.com/AbdouazizDEV/AlloDocteur',
      description: 'Application de gestion de rendez-vous médicaux permettant aux patients de prendre rendez-vous en ligne et aux médecins de gérer leur planning.',
      achievements: [
        'Interface intuitive pour patients et médecins',
        'Système de notification automatique',
        'Gestion des dossiers médicaux',
        'Intégration avec Cloudinary pour les documents'
      ]
    },
    {
      id: 5,
      period: 'Octobre 2024',
      company: 'Freelance',
      position: 'Développeur Full-Stack',
      project: 'Réseau Social pour Tailleurs',
      technologies: ['Node.js', 'React.js', 'Prisma', 'MongoDB', 'Mongoose', 'Cloudinary', 'MySQL'],
      github: 'https://github.com/Bakemono-san/socialtailorapp-react',
      description: 'Plateforme sociale dédiée aux tailleurs permettant le partage de créations, la mise en relation client-tailleur et la gestion de commandes.',
      achievements: [
        'Architecture microservices avec Node.js',
        'Interface React moderne et responsive',
        'Système de messagerie en temps réel',
        'Galerie de créations avec Cloudinary'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expériences Professionnelles</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un parcours riche en projets variés, de la technologie gouvernementale aux solutions innovantes pour entreprises
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center text-emerald-600 font-medium">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                    <h4 className="text-lg font-semibold text-emerald-600 mb-4">{exp.project}</h4>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Technologies utilisées :</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Réalisations clés :</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                      {exp.link && (
                        <motion.a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Voir le projet
                        </motion.a>
                      )}
                      {exp.github && (
                        <motion.a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Github size={16} className="mr-2" />
                          Code source
                        </motion.a>
                      )}
                    </div>
                    {exp.link2 && (
                      <div className="flex flex-wrap gap-4 mt-4">
                      <motion.a
                        href={exp.link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                      >
                        <BookOpen size={16} className="mr-2" />
                        Documentation API
                      </motion.a>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;