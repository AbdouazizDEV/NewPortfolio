import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 12,
      title: 'La Cuisine de Maman',
      description: 'Application mobile Ionic pour un restaurant, réalisée chez Jant Tech aux côtés de Jant-couvoir et Let\'s GO.',
      image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1775995572/Rectangle_2040_tc1z61.png',
      technologies: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'SCSS'],
      category: 'mobile',
      link: 'https://res.cloudinary.com/dhivn2ahm/video/upload/v1775995317/WhatsApp_Video_2026-04-12_at_11.59.07_yiuhky.mp4',
      linkLabel: 'Voir la démo vidéo',
      github: null,
      featured: true
    },
    {
      id: 13,
      title: 'Quizz+',
      description: 'Application mobile et site web Quizz+, réalisés chez DIZIGROUP avec React Native, Expo et React.',
      image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1780414790/logo_zxivqy.png',
      technologies: ['React Native', 'React.js', 'TypeScript', 'Expo', 'Node.js', 'Express.js', 'Tailwind CSS'],
      category: 'mobile',
      link: 'https://res.cloudinary.com/dhivn2ahm/video/upload/v1780414312/WhatsApp_Video_2026-06-02_at_15.15.12_tsutdv.mp4',
      link2: 'https://quizzp.com/',
      linkLabel: 'Voir la démo vidéo',
      linkLabel2: 'Voir le site web',
      github: null,
      featured: true
    },
    {
      id: 14,
      title: 'Helping Yourself',
      description: 'Plateforme digitale unifiée, disponible en version Web et Mobile (hybride), dont le fonctionnement s\'inspire d\'un système bancaire digital. Elle centralise des services d\'accompagnement dans de multiples domaines stratégiques, accessibles depuis une seule application avec un système de paiement unifié et un suivi en temps réel des demandes.',
      image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1780414855/icon_mm53ui.png',
      technologies: ['Ionic', 'Angular', 'Nest.JS','ReactJS', 'TypeScript', 'Capacitor', 'SCSS'],
      category: 'mobile',
      link: 'https://helping-yourself.com/',
      link2: 'https://bo.helping-yourself.com/',
      link3: 'https://api.helping-yourself.com/docs/',
      link4: 'https://res.cloudinary.com/dhivn2ahm/video/upload/v1780413497/WhatsApp_Video_2026-06-02_at_15.14.37_rpaskh.mp4',
      linkLabel: 'Voir le site web',
      linkLabel2: 'Voir le back-office',
      linkLabel3: 'Voir la documentation API',
      linkLabel4: 'Voir la démo vidéo app Mobile',
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
      technologies: [ 'Nest.js', 'React.js','Docker', 'Neon Postgres','GitHub','Tailwind CSS','Vite','Prisma ORM'],
      category: 'web',
      link: 'https://agence-de-voyage-front-tptc.vercel.app/',
      github: 'https://github.com/AbdouazizDEV/Agence_de_Voyage_front',
      featured: false
    },
    {
      id:11,
      title: 'Forum des Territoires',
      description: 'Une plateforme stratégique de dialogue, d\'investissement et de coopération décentralisée',
      image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1770471490/partener_ddnssj.png',
      technologies: [ 'Node.js', 'Express.js', 'React.js', 'Tailwind CSS'],
      category: 'web',
      link: 'https://forumdesterritoires.com/',
      github: 'https://github.com/AbdouazizDEV/Forum-des-territoires',
      featured: true
    },
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
      'Angular': 'bg-red-100 text-red-700',
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
      'Ionic': 'bg-blue-100 text-indigo-700',
      'Capacitor': 'bg-cyan-100 text-blue-800',
      'SCSS': 'bg-pink-100 text-pink-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'Vue.js': 'bg-blue-100 text-blue-700',
      'Github': 'bg-purple-100 text-purple-700',
      'Prisma ORM': 'bg-purple-100 text-purple-700',
      'Docker': 'bg-emerald-100 text-emerald-700',
      'Socket.io': 'bg-purple-100 text-purple-700',
      'Vite': 'bg-emerald-100 text-emerald-700',
      'WebSocket': 'bg-purple-100 text-purple-700',
      'Neon Postgres': 'bg-emerald-100 text-emerald-700',
      'GitHub': 'bg-purple-100 text-purple-700',
    };
    return colors[tech as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="projects" className="py-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 mb-3">Réalisations</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#14241c]">Projets</h2>
          <p className="mt-4 text-lg text-stone-600 leading-relaxed">
            Applications mobiles, plateformes web et outils métier livrés pour des entreprises et des institutions.
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
                  ? 'bg-emerald-800 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
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
            className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-white"
              >
                <div className="relative h-36 overflow-hidden bg-[#10261c]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 rounded-full bg-emerald-800 px-3 py-1 text-sm font-medium text-white">
                      ⭐ Projet Phare
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#14241c] group-hover:text-emerald-800">
                    {project.title}
                  </h3>
                  
                  <p className="mb-3 line-clamp-3 text-sm leading-6 text-stone-600">
                    {project.description}
                  </p>

                  <div className="mb-3 flex flex-wrap gap-1.5">
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
                  <div className="flex flex-wrap gap-2">
                    {[
                      project.link ? { href: project.link, label: (project as { linkLabel?: string }).linkLabel ?? 'Voir le projet' } : null,
                      (project as { link2?: string; linkLabel2?: string }).link2
                        ? { href: (project as { link2: string }).link2, label: (project as { linkLabel2?: string }).linkLabel2 ?? 'Lien' }
                        : null,
                      (project as { link3?: string; linkLabel3?: string }).link3
                        ? { href: (project as { link3: string }).link3, label: (project as { linkLabel3?: string }).linkLabel3 ?? 'Lien' }
                        : null,
                      (project as { link4?: string; linkLabel4?: string }).link4
                        ? { href: (project as { link4: string }).link4, label: (project as { linkLabel4?: string }).linkLabel4 ?? 'Lien' }
                        : null,
                    ]
                      .filter((item): item is { href: string; label: string } => Boolean(item))
                      .map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full bg-emerald-800 px-3 py-2 text-xs font-medium text-white transition hover:bg-emerald-900"
                        >
                          <ExternalLink size={14} className="mr-1.5" />
                          {item.label}
                        </a>
                      ))}

                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-stone-300 px-3 py-2 text-xs font-medium text-stone-700 transition hover:bg-stone-50"
                      >
                        <Github size={14} className="mr-1.5" />
                        Code source
                      </a>
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
          <div className="rounded-3xl bg-emerald-900 p-8 text-white">
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
              className="rounded-full bg-white px-8 py-3 font-medium text-emerald-900 transition hover:bg-emerald-50"
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