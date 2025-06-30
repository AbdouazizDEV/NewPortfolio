import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Server, 
  Database, 
  Settings, 
  Smartphone,
  Brain,
  Users,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: Code,
      color: 'emerald',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 92, icon: '⚡' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'React.js', level: 90, icon: '⚛️' },
        { name: 'Angular 18', level: 82, icon: '🅰️' },
        { name: 'Tailwind CSS', level: 88, icon: '💨' },
        { name: 'Responsive Design', level: 93, icon: '📱' }
      ]
    },
    backend: {
      title: 'Backend',
      icon: Server,
      color: 'blue',
      skills: [
        { name: 'Node.js', level: 88, icon: '💚' },
        { name: 'Express.js', level: 85, icon: '⚡' },
        { name: 'NestJS', level: 80, icon: '🐱' },
        { name: 'PHP', level: 87, icon: '🐘' },
        { name: 'Laravel 11', level: 90, icon: '🔴' },
        { name: 'API REST', level: 92, icon: '🔗' },
        { name: 'Prisma ORM', level: 83, icon: '🔷' }
      ]
    },
    database: {
      title: 'Bases de Données',
      icon: Database,
      color: 'purple',
      skills: [
        { name: 'MySQL', level: 90, icon: '🐬' },
        { name: 'PostgreSQL', level: 85, icon: '🐘' },
        { name: 'MongoDB', level: 82, icon: '🍃' },
        { name: 'Mongoose', level: 80, icon: '📊' },
        { name: 'Firebase', level: 78, icon: '🔥' },
        { name: 'Neon Postgres', level: 75, icon: '💫' },
        { name: 'Supabase', level: 85, icon: '⚡' }
      ]
    },
    tools: {
      title: 'Outils & DevOps',
      icon: Settings,
      color: 'orange',
      skills: [
        { name: 'Git', level: 90, icon: '📚' },
        { name: 'GitLab', level: 88, icon: '🦊' },
        { name: 'GitHub', level: 92, icon: '🐙' },
        { name: 'Cloudinary', level: 85, icon: '☁️' },
        { name: 'LWS', level: 80, icon: '🚀' },
        { name: 'Docker', level: 75, icon: '🐳' }
      ]
    },
    mobile: {
      title: 'Mobile',
      icon: Smartphone,
      color: 'pink',
      skills: [
        { name: 'Flutter', level: 78, icon: '💙' },
        { name: 'React Native', level: 75, icon: '📱' },
        { name: 'Progressive Web Apps', level: 82, icon: '🌐' }
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: Brain,
      color: 'indigo',
      skills: [
        { name: 'Résolution de problèmes', level: 95, icon: '🧩' },
        { name: 'Travail en équipe', level: 90, icon: '👥' },
        { name: 'Communication', level: 88, icon: '💬' },
        { name: 'Apprentissage rapide', level: 93, icon: '📚' },
        { name: 'Curiosité technologique', level: 98, icon: '🔍' },
        { name: 'Adaptabilité', level: 91, icon: '🔄' }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'from-emerald-500 to-emerald-600 text-emerald-600 bg-emerald-50 border-emerald-200',
      blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200',
      purple: 'from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200',
      orange: 'from-orange-500 to-orange-600 text-orange-600 bg-orange-50 border-orange-200',
      pink: 'from-pink-500 to-pink-600 text-pink-600 bg-pink-50 border-pink-200',
      indigo: 'from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50 border-indigo-200'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise complète couvrant toute la chaîne de développement web moderne
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === key;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive 
                    ? `bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <IconComponent size={20} className="mr-2" />
                {category.title}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                  <span className="text-emerald-600 font-bold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">En Constante Évolution</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              La technologie évolue rapidement, et moi aussi. Je consacre du temps régulièrement 
              à l'apprentissage de nouvelles technologies, la participation à des projets open source, 
              et la veille technologique pour rester à la pointe des innovations du développement web.
            </p>
            <div className="flex justify-center items-center mt-6 space-x-8 text-emerald-600">
              <div className="flex items-center">
                <Target size={20} className="mr-2" />
                <span className="font-medium">Orienté résultats</span>
              </div>
              <div className="flex items-center">
                <Zap size={20} className="mr-2" />
                <span className="font-medium">Performance optimale</span>
              </div>
              <div className="flex items-center">
                <Lightbulb size={20} className="mr-2" />
                <span className="font-medium">Solutions innovantes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;