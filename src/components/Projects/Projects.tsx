import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 0,
      title: 'TAGGAT MA',
      description: 'Plateforme éducative TAGGAT MA, avec gestion des élèves, des cours, des professeurs et des documents officiels.',
      image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1761196405/taggat_MA_tmujxx.jpg',
      technologies: ['Laravel 12', 'Angular 19', 'Mysql','Redis','Vue.js','Swagger','GitLab'],
      category: 'web',
      link: 'https://web-eas.taggatma.com/',
      link2: 'https://api-eas.taggatma.com/api/documentation#',
      github: null,
      featured: true
    },
    {
      id: 1,
      title: 'Credex FINTRA',
      description: 'Plateforme fintech d\'avance sur salaire composée de trois composants principaux : 1. Application mobile pour les employés 2. Application web pour les entreprises 3. Application web pour l\'administration de la plateforme',
      image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1761196204/logoColore_u3qdsk.png',
      technologies: ['React Native','Expo','Next.JS', 'Nest.JS', 'Mysql','GitLab','Tailwind CSS'],
      category: 'mobile',
      link: null,
      github: null,
      featured: true
    },
    {
      id: 2,
      title: 'Assemblée Nationale du Sénégal',
      description: 'Plateforme officielle de l\'Assemblée Nationale avec gestion des députés, sessions parlementaires et documents officiels.',
      image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1751498219/Assemblee-Nationale-Senegalaise-_wjdc4u.jpg',
      technologies: ['Laravel 11', 'Angular 18', 'PostgreSQL', 'GitLab'],
      category: 'web',
      link: 'https://www.assemblee.sn/fr',
      github: null,
      featured: true
    },
    {
      id: 3,
      title: 'The Booker\'s',
      description: 'Plateforme complète de gestion de réservations pour restaurants avec interface client et back-office.',
      image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Laravel', 'Angular 19', 'Supabase', 'MySQL'],
      category: 'web',
      link: 'https://bo-thebookers.nianetechnologies.com/',
      github: null,
      featured: true
    },
    {
      id: 4,
      title: 'Âllo Docteur',
      description: 'Application de gestion de rendez-vous médicaux avec interface patients et médecins.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Laravel', 'Node.js', 'Cloudinary', 'MySQL'],
      category: 'web',
      link: null,
      github: 'https://github.com/AbdouazizDEV/AlloDocteur',
      featured: true
    },
    {
      id: 5,
      title: 'Réseau Social Tailleurs',
      description: 'Plateforme sociale pour tailleurs avec partage de créations et mise en relation client-tailleur.',
      image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1751498360/DALL_E_2023-12-10_03.54.21_-_An_illustration_showing_a_social_media_interface_with_fashion_posts_highlighting_digital_interactions_such_as_likes_and_comments_and_a_one-click_pur_480x480_hp86uf.webp',
      technologies: ['Node.js', 'React.js', 'MongoDB', 'Cloudinary'],
      category: 'web',
      link: null,
      github: 'https://github.com/Bakemono-san/socialtailorapp-react',
      featured: false
    },
    {
      id: 6,
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce moderne avec gestion des produits, commandes et paiements.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React.js', 'Node.js', 'Stripe', 'MongoDB'],
      category: 'web',
      link: null,
      github: '#',
      featured: false
    },
    {
      id: 7,
      title: 'Mobile Banking App',
      description: 'Application mobile de banque avec transferts, gestion de comptes et notifications.',
      image: 'https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'PostgreSQL'],
      category: 'mobile',
      link: null,
      github: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Projet Xarala (Mini-projet)',
      description: 'Xarala forme des milliers d\'apprenants à des technologies web modernes. Pour tester ma polyvalence, ils m\'ont confié un mini-projet à réaliser en 48 h chrono. Aucun code ni maquette ne sont fournis : je suis partiras de zéro, en m\'inspirant des bonnes pratiques et en piochant librement dans les frameworks open-source.',
      image: 'https://res.cloudinary.com/dao8m0if6/image/upload/v1765284992/logo.378a33b2eded_phc2yg.webp',
      technologies: [ 'Nest.js', 'Neon Postgres','React.js','GitHub','Tailwind CSS','Vite','Prisma ORM'],
      category: 'web',
      link: 'https://bootcampsxaralafront.netlify.app/',
      github: 'https://github.com/AbdouazizDEV/Bootcamps-Xarala-Front',
      featured: false
    },
    {
      id:9,
      title: 'Bambey Bu Bess',
      description: 'Nous croyons en un Bambey où chaque citoyen a accès à des infrastructures de qualité, à une éducation d\'excellence, à des soins de santé accessibles et à des opportunités économiques équitables. Notre vision est celle d\'une ville dynamique, inclusive et tournée vers l\'avenir.',
      image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1764308060/activities/haskvffym6lrwjaatg5n.png',
      technologies: [ 'Next.js', 'Neon Postgres','GitHub','Tailwind CSS','Vite','Prisma ORM'],
      category: 'web',
      link: 'https://bambeybubess.netlify.app/',
      github: 'https://github.com/AbdouazizDEV/bambey-connect-hub',
      featured: false
    },
    {
      id:10,
      title: 'TravelAgency',
      description: 'Plateforme web moderne permettant aux clients de rechercher des offres de voyage et d\'envoyer automatiquement leur demande via WhatsApp à l\'agence, avec un back-office simplifié pour la gestion des offres.',
      image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1765917296/Screenshot_20251216_203258_ifxhmp.png',
      technologies: [ 'Nest.JS', 'React.JS','Docker', 'Neon Postgres','GitHub','Tailwind CSS','Vite','Prisma ORM'],
      category: 'web',
      link: 'https://agence-de-voyage-front-tptc.vercel.app/',
      github: 'https://github.com/AbdouazizDEV/Agence_de_Voyage_front',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous les projets' },
    { key: 'web', label: 'Applications Web' },
    { key: 'mobile', label: 'Applications Mobile' },
    { key: 'featured', label: 'Projets Phares' }
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const getTechColor = (tech: string) => {
    const colors = {
      'Laravel': 'bg-red-100 text-red-700',
      'Laravel 11': 'bg-red-100 text-red-700',
      'Laravel 12': 'bg-emerald-100 text-emerald-700',
      'React.js': 'bg-blue-100 text-blue-700',
      'Node.js': 'bg-green-100 text-green-700',
      'Angular 18': 'bg-red-100 text-red-700',
      'Angular 19': 'bg-emerald-100 text-emerald-700',
      'PostgreSQL': 'bg-blue-100 text-blue-700',
      'MySQL': 'bg-orange-100 text-orange-700',
      'MongoDB': 'bg-green-100 text-green-700',
      'Flutter': 'bg-blue-100 text-blue-700',
      'Firebase': 'bg-yellow-100 text-yellow-700',
      'Cloudinary': 'bg-purple-100 text-purple-700',
      'Supabase': 'bg-cyan-100 text-emerald-700',
      'Tailwind CSS': 'bg-blue-100 text-blue-700',
      'Next.js': 'bg-yellow-100 text-green-700 #143731',
      'Nest.js': 'bg-cyan-100 text-orange-700 #143731',
      'GitLab': 'bg-purple-100 text-purple-700 #143731',
      'Swagger': 'bg-yellow-100 text-yellow-700',
      'Expo': 'bg-emerald-100 text-emerald-700',
      'React Native': 'bg-emerald-100 text-emerald-700',
      'Vue.js': 'bg-blue-100 text-blue-700',
      'Github': 'bg-purple-100 text-purple-700',
    };
    return colors[tech as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Projets</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une sélection de projets représentant mon expertise et ma passion pour le développement
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <Filter size={16} className="mr-2" />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      ⭐ Projet Phare
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Voir le projet
                      </motion.a>
                    )}
                    
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${project.link ? 'px-4' : 'flex-1 px-4'} py-2 border border-gray-300 text-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200`}
                      >
                        <Github size={16} className={project.link ? '' : 'mr-2'} />
                        {!project.link && 'Code source'}
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Intéressé par mon travail ?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Je suis toujours ouvert à de nouveaux défis et collaborations. 
              N'hésitez pas à me contacter pour discuter de vos projets.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200"
            >
              Discutons de votre projet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;