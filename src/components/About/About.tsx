import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '3+', label: 'Années d\'expérience' },
    { number: '15+', label: 'Projets réalisés' },
    { number: '4', label: 'Langues parlées' },
    { number: '100%', label: 'Satisfaction client' }
  ];

  const values = [
    {
      icon: Code,
      title: 'Code de qualité',
      description: 'Je privilégie la lisibilité, la maintenabilité et les bonnes pratiques.'
    },
    {
      icon: Globe,
      title: 'Vision globale',
      description: 'Une approche holistique du développement, du frontend au backend.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travail d\'équipe efficace et communication transparente.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Toujours à l\'affût des dernières technologies et tendances.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos de Moi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Développeur passionné et polyvalent
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Diplômé en Mathématiques et Informatique de l'UCAD-FST, je suis un développeur 
                Full-Stack avec une solide expérience dans la création d'applications web modernes 
                et performantes. Ma passion pour la technologie me pousse à constamment apprendre 
                et maîtriser de nouveaux outils.
              </p>
              <p>
                Spécialisé dans l'écosystème JavaScript (React, Node.js) et PHP (Laravel), 
                j'ai eu l'opportunité de travailler sur des projets variés, de la plateforme 
                de l'Assemblée Nationale du Sénégal aux applications de gestion de réservations 
                pour restaurants.
              </p>
              <p>
                <strong>Langues :</strong> Français, Anglais, Wolof, Serrère
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Ma philosophie</h4>
              <p className="text-gray-600 italic">
                "Le code n'est pas seulement fonctionnel, il doit être élégant, maintenable 
                et résoudre de vrais problèmes. Chaque ligne écrite doit apporter de la valeur."
              </p>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl shadow-lg"
              >
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Mes Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-emerald-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;