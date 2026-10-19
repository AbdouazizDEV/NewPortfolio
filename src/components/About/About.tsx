import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Users, Lightbulb, CheckCircle, Shield, Clock, UserRound } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '3', label: 'Années d\'expérience' },
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
    },
    {
      icon: CheckCircle,
      title: 'Qualité',
      description: 'Je m\'assure que les livrables sont de qualité et répondent aux besoins des clients.'
    },
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Je m\'assure que les livrables sont sécurisés et respectent les normes de sécurité.'
    },
    {
      icon: Clock,
      title: 'Flexibilité',
      description: 'Je m\'adapte à vos besoins et à vos contraintes.'
    },
    {
      icon: UserRound,
      title: 'User Experience',
      description: 'Je m\'assure que les livrables sont intuitifs et faciles à utiliser.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 mb-3">Profil</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#14241c]">À propos</h2>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold tracking-tight text-[#14241c] mb-6">
              Développeur Full-Stack web et mobile
            </h3>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                J'accompagne entreprises, institutions et startups dans la conception de plateformes web,
                d'applications mobiles et de systèmes digitaux capables de répondre à des problèmes concrets.
              </p>
              <p>
                Spécialisé dans l'écosystème JavaScript, je couvre l'analyse des besoins, l'architecture,
                le développement, l'intégration d'API, le déploiement et la maintenance. Les missions récentes
                vont de La Cuisine de Maman (Ionic) au pilotage technique chez DIZIGROUP.
              </p>
              <p>
                <strong className="text-[#14241c]">Langues :</strong> Français, Anglais, Wolof, Serrère
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
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-[#f7f5f0] rounded-3xl border border-stone-200/80"
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
          <h3 className="text-2xl font-semibold tracking-tight text-[#14241c] text-center mb-12">Ce qui guide mon travail</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-3xl border border-stone-200/80 hover:-translate-y-1 transition-all duration-300"
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