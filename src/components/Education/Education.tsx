import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      period: '2022 - 2025',
      institution: 'UCAD-FST',
      degree: 'Licence en Mathématiques et Informatique',
      location: 'Dakar, Sénégal',
      description: 'Formation complète couvrant les mathématiques appliquées, l\'algorithmique, la programmation et les systèmes informatiques.',
      highlights: [
        'Algorithmique et structures de données',
        'Mathématiques appliquées à l\'informatique',
        'Programmation orientée objet',
        'Bases de données et systèmes'
      ]
    },
    {
      id: 2,
      period: '2024',
      institution: 'Sonatel Academy',
      degree: 'Formation Développement Web et Mobile',
      location: 'Dakar, Sénégal',
      description: 'Formation intensive axée sur les technologies modernes de développement web et mobile.',
      highlights: [
        'Développement web full-stack',
        'Technologies mobiles',
        'Projets pratiques en entreprise',
        'Méthodologies agiles'
      ]
    },
    {
      id: 3,
      period: '2023',
      institution: 'SunuCode',
      degree: 'Certificat en Développement Web',
      location: 'Dakar, Sénégal',
      description: 'Programme pratique de développement web avec focus sur les technologies frontend et backend.',
      highlights: [
        'HTML, CSS, JavaScript avancé',
        'Frameworks frontend modernes',
        'Développement backend',
        'Projets portfolio'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Introduction to Relational Database and SQL',
      issuer: 'Coursera',
      date: '2024',
      icon: '🗄️',
      link: 'https://www.coursera.org/account/accomplishments/verify/2234567890'
    },
    {
      title: 'APIs in Node.js RESTful Backend',
      issuer: 'Coursera',
      date: '2024',
      icon: '🔗',
      link: 'https://www.coursera.org/account/accomplishments/verify/2234567890'
    },
    {
      title: 'Certificat Développement Web',
      issuer: 'SunuCode',
      date: '2023',
      icon: '💻',
      link: '#'
    },
    {
      title: 'Intelligence Artificielle',
      issuer: 'FORCE-N',
      date: '2023',
      icon: '🤖',
      link: '#'
    },
    {
      title: 'Web3 and Blockchain',
      issuer: 'FORCE-N',
      date: '2023',
      icon: '🕸️',
      link: '#'
    },
    {
      title: 'L\'essentiel sur Flutter pour le développement mobile',
      issuer: 'LinkedIn Learning',
      date: '2023',
      icon: '🛠️',
      link: '#'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Formation & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un parcours académique solide complété par une formation continue en technologies modernes
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
                        className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
                  className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
                    <motion.a
                      href={cert.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-400 hover:text-emerald-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
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
              className="mt-8 p-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl text-white"
            >
              <h4 className="font-bold text-lg mb-3">🎯 Formation Continue</h4>
              <p className="text-emerald-100 leading-relaxed">
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