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
  Zap,
  MonitorSmartphone,
  Waypoints,
  Radio,
  Puzzle,
  Layers,
  MessageCircle,
  BookOpen,
  ClipboardList,
} from 'lucide-react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiNextdotjs,
  SiExpo,
  SiFlutter,
  SiDart,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPhp,
  SiLaravel,
  SiPrisma,
  SiSwagger,
  SiRedis,
  SiSocketdotio,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGitlab,
  SiGithub,
  SiCloudinary,
  SiDocker,
  SiIonic,
  SiCapacitor,
  SiPwa,
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: Code,
      color: 'emerald',
      skills: [
        { name: 'HTML5', level: 98, icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', level: 95, icon: SiCss, color: '#1572B6' },
        { name: 'JavaScript', level: 95, icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', level: 85, icon: SiTypescript, color: '#3178C6' },
        { name: 'React.js', level: 90, icon: SiReact, color: '#61DAFB' },
        { name: 'Angular', level: 82, icon: SiAngular, color: '#DD0031' },
        { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Responsive Design', level: 93, icon: MonitorSmartphone, color: '#047857' },
        { name: 'Next.js', level: 88, icon: SiNextdotjs, color: '#111827' },
        { name: 'React Native', level: 87, icon: SiReact, color: '#61DAFB' },
        { name: 'Expo', level: 90, icon: SiExpo, color: '#000000' },
        { name: 'Flutter', level: 85, icon: SiFlutter, color: '#02569B' },
        { name: 'Dart', level: 85, icon: SiDart, color: '#0175C2' },
      ]
    },
    backend: {
      title: 'Backend',
      icon: Server,
      color: 'blue',
      skills: [
        { name: 'Node.js', level: 88, icon: SiNodedotjs, color: '#5FA04E' },
        { name: 'Express.js', level: 85, icon: SiExpress, color: '#000000' },
        { name: 'NestJS', level: 80, icon: SiNestjs, color: '#E0234E' },
        { name: 'PHP', level: 87, icon: SiPhp, color: '#777BB4' },
        { name: 'Laravel', level: 90, icon: SiLaravel, color: '#FF2D20' },
        { name: 'API REST', level: 92, icon: Waypoints, color: '#047857' },
        { name: 'Prisma ORM', level: 83, icon: SiPrisma, color: '#2D3748' },
        { name: 'Swagger', level: 85, icon: SiSwagger, color: '#85EA2D' },
        { name: 'Redis', level: 80, icon: SiRedis, color: '#FF4438' },
        { name: 'Socket.io', level: 87, icon: SiSocketdotio, color: '#010101' },
        { name: 'WebSocket', level: 90, icon: Radio, color: '#047857' },
      ]
    },
    database: {
      title: 'Bases de Données',
      icon: Database,
      color: 'purple',
      skills: [
        { name: 'MySQL', level: 90, icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', level: 85, icon: SiPostgresql, color: '#4169E1' },
        { name: 'MongoDB', level: 82, icon: SiMongodb, color: '#47A248' },
        { name: 'Firebase', level: 78, icon: SiFirebase, color: '#DD2C00' },
        { name: 'Supabase', level: 85, icon: SiSupabase, color: '#3FCF8E' },
        { name: 'Redis', level: 80, icon: SiRedis, color: '#FF4438' },
      ]
    },
    tools: {
      title: 'Outils & DevOps',
      icon: Settings,
      color: 'orange',
      skills: [
        { name: 'Git', level: 90, icon: SiGit, color: '#F05032' },
        { name: 'GitLab', level: 88, icon: SiGitlab, color: '#FC6D26' },
        { name: 'GitHub', level: 92, icon: SiGithub, color: '#181717' },
        { name: 'Cloudinary', level: 85, icon: SiCloudinary, color: '#3448C5' },
        { name: 'LWS', level: 80, icon: Server, color: '#047857' },
        { name: 'Docker', level: 75, icon: SiDocker, color: '#2496ED' },
      ]
    },
    mobile: {
      title: 'Mobile',
      icon: Smartphone,
      color: 'pink',
      skills: [
        { name: 'Ionic', level: 88, icon: SiIonic, color: '#3880FF' },
        { name: 'Capacitor', level: 85, icon: SiCapacitor, color: '#119EFF' },
        { name: 'React Native', level: 87, icon: SiReact, color: '#61DAFB' },
        { name: 'Expo', level: 90, icon: SiExpo, color: '#000000' },
        { name: 'Flutter', level: 78, icon: SiFlutter, color: '#02569B' },
        { name: 'Progressive Web Apps', level: 82, icon: SiPwa, color: '#5A0FC8' },
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: Brain,
      color: 'indigo',
      skills: [
        { name: 'Résolution de problèmes', level: 95, icon: Puzzle, color: '#047857' },
        { name: 'Clean Architecture & SOLID', level: 86, icon: Layers, color: '#047857' },
        { name: 'Travail en équipe', level: 90, icon: Users, color: '#047857' },
        { name: 'Communication', level: 88, icon: MessageCircle, color: '#047857' },
        { name: 'Apprentissage rapide', level: 93, icon: BookOpen, color: '#047857' },
        { name: 'Gestion de projet', level: 90, icon: ClipboardList, color: '#047857' },
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
      indigo: 'from-indigo-500 to-indigo-600 text-indigo-600 bg-indigo-50 border-indigo-200',
      gray: 'from-gray-500 to-gray-600 text-gray-600 bg-gray-50 border-gray-200',
      yellow: 'from-yellow-500 to-yellow-600 text-yellow-600 bg-yellow-50 border-yellow-200',
      green: 'from-green-500 to-green-600 text-green-600 bg-green-50 border-green-200',
      red: 'from-red-500 to-red-600 text-red-600 bg-red-50 border-red-200'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 mb-3">Savoir-faire</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#14241c]">Compétences</h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            Web, mobile et API : Ionic, React, Angular, Laravel, NestJS, avec une attention portée à Clean Architecture et SOLID.
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
                    <skill.icon size={22} color={skill.color} className="mr-3 shrink-0" aria-hidden />
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
          className="mt-16"
        >
          <div className="rounded-3xl border border-stone-200 bg-[#f7f5f0] p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">En Constante Évolution</h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              La technologie évolue rapidement, et moi aussi. Je consacre du temps régulièrement 
              à l'apprentissage de nouvelles technologies, la participation à des projets open source, 
              et la veille technologique pour rester à la pointe des innovations du développement web.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-emerald-800">
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