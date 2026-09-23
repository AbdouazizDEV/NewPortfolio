import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      period: 'Février 2026 – En cours',
      institution: 'UCAD-FST',
      degree: 'Licence 3 Mathématiques et Informatique',
      location: 'Dakar, Sénégal',
      description: 'Troisième année de licence, en parallèle de missions de développement web et mobile.',
      highlights: [
        'Approfondissement en informatique',
        'Projets appliqués au développement logiciel',
        'Bases de données et systèmes'
      ]
    },
    {
      id: 2,
      period: 'Décembre 2025',
      institution: 'UCAD-FST',
      degree: 'Licence 2 Mathématiques et Informatique',
      location: 'Dakar, Sénégal',
      description: 'Deuxième année de licence en mathématiques et informatique.',
      highlights: [
        'Algorithmique et structures de données',
        'Programmation et systèmes',
        'Mathématiques appliquées'
      ]
    },
    {
      id: 3,
      period: 'Février 2024 – Novembre 2024',
      institution: 'Sonatel Academy',
      degree: 'Développement web et mobile',
      location: 'Dakar, Sénégal',
      description: 'Formation au développement web et mobile, complétée par un certificat Sonatel Academy.',
      highlights: [
        'Développement web full-stack',
        'Applications mobiles',
        'Projets pratiques'
      ]
    },
    {
      id: 4,
      period: 'Juillet 2023 – Décembre 2023',
      institution: 'SunuCode',
      degree: 'Développement web',
      location: 'Dakar, Sénégal',
      description: 'Parcours pratique de développement web, du frontend au backend.',
      highlights: [
        'HTML, CSS et JavaScript',
        'Interfaces et APIs',
        'Certificat en développement web'
      ]
    },
    {
      id: 5,
      period: 'Novembre 2022 – Juin 2023',
      institution: 'UCAD-FST',
      degree: 'Licence 1 Mathématiques et Informatique',
      location: 'Dakar, Sénégal',
      description: 'Première année de licence en mathématiques et informatique.',
      highlights: [
        'Fondamentaux mathématiques',
        'Initiation à l\'informatique',
        'Algorithmique'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Développement web et mobile',
      issuer: 'Sonatel Academy',
      date: '2024',
      icon: '📱'
    },
    {
      title: 'Introduction to Relational Database and SQL',
      issuer: 'Coursera',
      date: '2024',
      icon: '🗄️'
    },
    {
      title: 'APIs in Node.js : Write a RESTful API Backend Application',
      issuer: 'Coursera',
      date: '2024',
      icon: '🔗'
    },
    {
      title: 'Certificat en développement web',
      issuer: 'SunuCode',
      date: '2023',
      icon: '💻'
    },
    {
      title: 'Certificat en Intelligence Artificielle',
      issuer: 'Programme FORCE-N',
      date: '2023',
      icon: '🤖'
    }
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 mb-3">Parcours</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#14241c]">Formation et certifications</h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            Licence de mathématiques et informatique à l'UCAD-FST, complétée par Sonatel Academy, SunuCode et des certificats en ligne.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <GraduationCap className="mr-3 text-emerald-600" size={24} />
              Formation Académique
            </motion.h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-300"></div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 transform -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>

                    {/* Content Card */}
                    <div className="ml-16">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="rounded-3xl border border-stone-200/80 bg-[#f7f5f0] p-6 transition-all duration-300"
                      >
                        <div className="flex items-center text-emerald-600 font-medium mb-2">
                          <Calendar size={16} className="mr-2" />
                          {edu.period}
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                        <div className="flex items-center text-gray-600 mb-3">
                          <MapPin size={16} className="mr-2" />
                          {edu.institution} - {edu.location}
                        </div>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>
                        
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Points clés :</h5>
                          <ul className="space-y-1">
                            {edu.highlights.map((highlight, hlIndex) => (
                              <li key={hlIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center"
            >
              <Award className="mr-3 text-emerald-600" size={24} />
              Certifications
            </motion.h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="rounded-3xl border border-stone-200 bg-white p-6 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{cert.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                        <p className="text-emerald-600 font-medium">{cert.issuer}</p>
                        <div className="flex items-center text-gray-500 text-sm mt-1">
                          <Calendar size={14} className="mr-1" />
                          {cert.date}
                        </div>
                      </div>
                    </div>
                    {'link' in cert && cert.link ? (
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-emerald-800 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 rounded-3xl bg-emerald-900 p-6 text-white"
            >
              <h4 className="font-bold text-lg mb-3">🎯 Formation Continue</h4>
              <p className="text-emerald-100/90 leading-relaxed">
                Je crois fermement en l'apprentissage continu. Chaque semaine, je consacre du temps 
                à explorer de nouvelles technologies, suivre des cours en ligne, et participer à des 
                webinaires pour rester à jour avec les dernières innovations du secteur.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;