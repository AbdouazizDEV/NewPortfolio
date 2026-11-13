export type ExperienceLink = {
  href: string;
  label: string;
};

export type ExperienceProject = {
  title: string;
  role: string;
  summary: string;
  image?: string;
  imageBg?: string;
  technologies: string[];
  links?: ExperienceLink[];
};

export type ExperienceItem = {
  id: number;
  slug: string;
  period: string;
  company: string;
  position: string;
  project: string;
  technologies: string[];
  description: string;
  achievements: string[];
  links?: ExperienceLink[];
  github?: string;
  companyAbout: string;
  location: string;
  contractType: string;
  responsibilities: string[];
  projects: ExperienceProject[];
};

export const experiences: ExperienceItem[] = [
  {
    id: 15,
    slug: 'sdmi',
    period: 'Septembre 2026 – En cours (Freelance)',
    company: 'SDMI',
    position: 'Développeur Full-Stack',
    project: 'Plateforme web catalogue, stock Dakar et devis industriels',
    technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
    links: [
      { href: 'https://sdmi-eta.vercel.app/fr', label: 'Voir le site (FR)' },
      { href: 'https://sdmi-eta.vercel.app/en', label: 'English version' },
    ],
    description:
      "Mission freelance en cours pour SDMI : conception et développement d'une plateforme web Next.js bilingue (FR/EN) qui digitalise le catalogue technique, le stock Dakar et le parcours commercial. L'objectif est de permettre aux industriels de trouver rapidement une référence (DN, PN, matière, norme), de filtrer le stock et de demander un devis ou une réponse AO sous 24 h, tout en valorisant l'agence de Bopp et la conformité des fournitures.",
    achievements: [
      'Plateforme bilingue français / anglais avec navigation catalogue et contenu métier',
      'Sélecteur de stock Dakar : type de matériel, diamètre DN, pression PN/Class, métallurgie',
      'Catalogue par familles : vannes, tuyauteries, brides, raccords, robinetterie pétrole, étanchéité',
      'Parcours devis / cotation rapide, panier de références et CTA WhatsApp Pro',
      'Pages secteurs, à propos, documentation & certificats, contact & plan d’accès agence',
    ],
    companyAbout:
      "SDMI (Sénégalaise de distribution de matériels industriels) est un distributeur agréé DIN / ANSI / ISO, présent à Dakar (Bopp rue 2 × Casamance) depuis plus de 15 ans. L’entreprise accompagne les industries du Sénégal et de l’Afrique de l’Ouest en robinetterie, tuyauterie, filtration, mesure et raccords - avec +12 000 références en stock, devis structurés sous 24 h et traçabilité (certificats EN 10204 type 3.1, CE / PED). Clients de référence : TotalEnergies Sénégal, SAR, Vivo Energy, Compagnie Sucrière Sénégalaise, Eramet Grande Côte, Suez, etc.",
    location: 'Dakar, Sénégal - Bopp',
    contractType: 'Freelance',
    responsibilities: [
      'Architecturer et développer la plateforme catalogue Next.js bilingue FR/EN',
      'Modéliser les familles produits et les critères techniques (DN, PN, matières, normes)',
      'Concevoir le sélecteur de stock, la recherche catalogue et le parcours de devis',
      'Structurer les pages secteurs (incendie, eau–pétrole–gaz, agroalimentaire, mines)',
      'Mettre en avant conformité, documentation technique et contact agence / WhatsApp',
      'Itérer avec le client sur l’UX métier (comptoir pro, AO, enlèvement dépôt)',
    ],
    projects: [
      {
        title: 'Plateforme catalogue SDMI',
        role: 'Développeur Full-Stack',
        summary:
          "Site vitrine et catalogue technique pour la distribution industrielle : hero par secteur, familles de fournitures (vannes, tuyauteries, brides, accessoires), recherche par référence / DN / norme, et mise en avant du positionnement « distributeur agréé DIN / ANSI / ISO » avec stock Dakar et devis sous 24 h.",
        image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1792396996/sdmi-logo_jvrzfc.svg',
        imageBg: 'bg-[#f7f5f0]',
        technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
        links: [{ href: 'https://sdmi-eta.vercel.app/fr', label: 'Voir le site' }],
      },
      {
        title: 'Sélecteur de stock & filtres techniques',
        role: 'Développeur Full-Stack',
        summary:
          "Module de filtrage métier pour le stock Dakar : type de matériel (vannes boisseau, papillon, clapets, filtration, raccords), diamètre DN15→DN600+, pression de service (PN10 à PN63+, Class 150/300) et métallurgie (inox 316/304, fonte GS, acier A105/WCB, laiton). Objectif : accélérer la sélection terrain avant cotation.",
        technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
        links: [{ href: 'https://sdmi-eta.vercel.app/fr', label: 'Tester le sélecteur' }],
      },
      {
        title: 'Parcours devis, secteurs & agence',
        role: 'Développeur Full-Stack',
        summary:
          "Parcours commercial digital : panier « Demander un devis », cotation rapide, pages secteurs (protection incendie / sprinklers, fluides eau–pétrole–gaz, agroalimentaire inox, industrie minière), documentation & certificats, à propos (15+ ans, +12 000 refs) et contact dépôt Bopp avec WhatsApp Pro et horaires comptoir.",
        technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
        links: [
          { href: 'https://sdmi-eta.vercel.app/fr/a-propos', label: 'À propos' },
          { href: 'https://sdmi-eta.vercel.app/fr/contact', label: 'Contact & agence' },
        ],
      },
    ],
  },
  {
    id: 1,
    slug: 'dizigroup',
    period: 'Mars 2026 – En cours',
    company: 'DIZIGROUP',
    position: 'Développeur Full-Stack & Responsable technique',
    project: 'Pilotage technique, Quizz+, Kondaktor et site corporate',
    technologies: [
      'Next.js',
      'React.js',
      'React Native',
      'Expo',
      'Angular',
      'NestJS',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'PostgreSQL',
    ],
    links: [
      { href: 'https://dizigroup.net/', label: 'Site DIZIGROUP' },
      { href: 'https://quizzp.com/accueil', label: 'Quizz+' },
      { href: 'https://www.kondaktor.com/', label: 'Kondaktor' },
    ],
    description:
      "En tant que responsable technique chez DIZIGROUP, je pilote l'architecture des projets de la société - startup fintech et transformation digitale -, je développe les solutions numériques, j'encadre les équipes de développement et je garantis la qualité des livrables. Sur cette période, j'ai porté le site corporate, l'écosystème Quizz+ (mobile, web et back-office) et la plateforme Kondaktor (application web et back-office).",
    achievements: [
      "Pilotage de l'architecture technique sur les produits DIZIGROUP (fintech & transformation digitale)",
      'Encadrement des équipes et revue de qualité des livrables',
      'Site corporate DIZIGROUP : vitrine d’ingénierie digitale et de ventures',
      'Quizz+ : application mobile, application web et back-office (travail en singleton sur le web et le BO)',
      'Kondaktor : application web et back-office d’orchestration organisationnelle',
    ],
    companyAbout:
      "DIZIGROUP se positionne comme une infrastructure d’exécution digitale depuis Dakar : conseil & stratégie, services & solutions, talent & organisation, offshore & delivery. Le groupe construit aussi ses propres ventures - Quizz+ (EdTech & gaming), DiziPay (fintech / orchestration de paiements), Impaktor (incubation) et Kondaktor (orchestration organisationnelle avec agents IA sous gouvernance humaine).",
    location: 'Dakar, Sénégal',
    contractType: 'Responsable technique',
    responsibilities: [
      "Piloter l'architecture technique des projets de la société (startup fintech et transformation digitale)",
      'Développer les solutions numériques web et mobile de bout en bout',
      'Encadrer les équipes de développement et aligner compétences techniques / enjeux business',
      'Garantir la qualité, la cohérence et la maintenabilité des livrables',
      'Structurer les back-offices et les parcours produit (Quizz+, Kondaktor)',
    ],
    projects: [
      {
        title: 'Site web DIZIGROUP',
        role: 'Développeur Full-Stack',
        summary:
          "Site corporate de DIZIGROUP - « L'ingénierie digitale au service de l'innovation africaine ». Présentation des quatre piliers (conseil, solutions, talent, offshore), du portfolio de ventures (Quizz+, DiziPay, Impaktor, Kondaktor) et des parcours clients / investisseurs / experts. Construit avec Next.js.",
        image: 'https://www.dizigroup.net/logo.png',
        imageBg: 'bg-[#0b1220]',
        technologies: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS'],
        links: [{ href: 'https://dizigroup.net/', label: 'Voir le site' }],
      },
      {
        title: 'Quizz+',
        role: 'Lead technique & développeur (mobile + web + back-office)',
        summary:
          "Plateforme de quiz gamifiée pour l'Afrique et la francophonie : duels, classements et gains. J'ai travaillé sur l'application mobile (React Native / Expo) ainsi que sur l'application web et le back-office en singleton - arène de quiz, catégories (culture, sport, tech, société), défis entre joueurs et parcours partenaires.",
        image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1780414790/logo_zxivqy.png',
        technologies: [
          'React Native',
          'Expo',
          'React.js',
          'TypeScript',
          'Node.js',
          'Express.js',
          'Tailwind CSS',
        ],
        links: [
          { href: 'https://quizzp.com/accueil', label: 'Voir le site' },
          {
            href: 'https://res.cloudinary.com/dhivn2ahm/video/upload/v1780414312/WhatsApp_Video_2026-06-02_at_15.15.12_tsutdv.mp4',
            label: 'Démo vidéo',
          },
        ],
      },
      {
        title: 'Kondaktor',
        role: 'Lead technique & développeur (application web + back-office)',
        summary:
          "Système d'orchestration organisationnelle qui relie stratégie, décisions, actions, projets, connaissances, processus et agents IA sous gouvernance humaine. J'ai travaillé sur l'application web et le back-office : cycle information → décision → action → résultat, modules stratégie / décisions / actions / projets, et vision d'exécution alignée pour les organisations.",
        image:
          'https://res.cloudinary.com/dhivn2ahm/image/upload/v1792395271/01_Kondaktor_Symbole_Couleur_512px_dv079t.png',
        technologies: ['Angular', 'NestJS', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
        links: [{ href: 'https://www.kondaktor.com/', label: 'Voir le site' }],
      },
    ],
  },
  {
    id: 2,
    slug: 'jant-tech',
    period: 'Avril 2026 – Juin 2026 (Freelance)',
    company: 'Jant Tech',
    position: 'Développeur Mobile',
    project: "La Cuisine de Maman, JantAgro et Let's GO",
    technologies: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'SCSS'],
    links: [
      { href: 'https://jant.tech/', label: 'Site Jant Tech' },
      { href: 'https://jant.tech/jantagro', label: 'JantAgro' },
      {
        href: 'https://res.cloudinary.com/dhivn2ahm/video/upload/v1775995317/WhatsApp_Video_2026-04-12_at_11.59.07_yiuhky.mp4',
        label: 'Démo La Cuisine de Maman',
      },
    ],
    description:
      "Mission freelance développeur mobile chez JANT TECH SARL : conception et livraison d'applications Ionic / Angular / Capacitor adaptées aux réalités africaines. Sur ce cycle, j'ai réalisé La Cuisine de Maman (restaurant), l'application mobile de JantAgro (ex Jant-couvoir) pour l'élevage avicole et agricole, ainsi que Let's GO, une app de mobilité urbaine à la demande (courses, mise en relation chauffeur–passager, suivi de trajet).",
    achievements: [
      'App restaurant La Cuisine de Maman en Ionic, Angular et TypeScript',
      'Application mobile JantAgro (ex Jant-couvoir) : suivi cheptel, élevage et production sur le terrain',
      "Let's GO : application mobile de mobilité urbaine et courses à la demande",
      'Builds iOS et Android via Capacitor, UX pensée pour un usage terrain',
    ],
    companyAbout:
      "JANT TECH SARL (jant.tech) conçoit des solutions digitales intelligentes pour les entreprises africaines : SaaS (JantBi commerce, JantPharma santé, JantAgro élevage) et applications web & mobiles sur mesure. Basée à Dakar, l'équipe accompagne plus de 50 entreprises dans leur transformation digitale, avec une approche locale, scalable et orientée résultats (agriculture, commerce, santé, immobilier, industrie, administration).",
    location: 'Dakar, Sénégal',
    contractType: 'Freelance',
    responsibilities: [
      'Concevoir les écrans et parcours utilisateurs mobiles Ionic',
      'Développer les applications Angular / TypeScript / Capacitor',
      'Adapter les interfaces aux usages terrain (resto, élevage, mobilité)',
      'Préparer les builds iOS et Android et itérer avec les retours client',
    ],
    projects: [
      {
        title: 'La Cuisine de Maman',
        role: 'Développeur Mobile',
        summary:
          'Application mobile Ionic pour un restaurant : consultation du menu, parcours client et expérience pensée pour un usage quotidien sur smartphone. Livrée avec démo vidéo et déploiement Capacitor.',
        image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1775995572/Rectangle_2040_tc1z61.png',
        technologies: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'SCSS'],
        links: [
          {
            href: 'https://res.cloudinary.com/dhivn2ahm/video/upload/v1775995317/WhatsApp_Video_2026-04-12_at_11.59.07_yiuhky.mp4',
            label: 'Démo vidéo',
          },
        ],
      },
      {
        title: 'JantAgro (ex Jant-couvoir)',
        role: 'Développeur Mobile (Ionic)',
        summary:
          "Volet mobile de JantAgro, solution SaaS de gestion de l'élevage avicole et agricole (suivi du cheptel, gestion alimentaire, analyse de production). J'ai travaillé exclusivement sur l'application mobile Ionic, pour permettre aux éleveurs de suivre l'activité depuis le terrain - fermes, couvoirs et production.",
        image: 'https://jant.tech/assets/img/JantTech.png',
        imageBg: 'bg-[#f7f5f0]',
        technologies: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'SCSS'],
        links: [{ href: 'https://jant.tech/jantagro', label: 'Découvrir JantAgro' }],
      },
      {
        title: "Let's GO",
        role: 'Développeur Mobile',
        summary:
          "Application mobile de mobilité urbaine : commander une course à la demande, mettre en relation passagers et chauffeurs, suivre le trajet en temps réel et fluidifier le parcours de réservation. Conçue pour un usage quotidien en ville, avec une expérience simple et réactive sur iOS et Android via Capacitor.",
        technologies: ['Ionic', 'Angular', 'TypeScript', 'Capacitor', 'SCSS'],
      },
    ],
  },
  {
    id: 3,
    slug: 'kahfi-sn',
    period: 'Mai 2026 (Freelance)',
    company: 'Kahfi SN',
    position: 'Développeur Full-Stack',
    project: 'Helping Yourself (HYS) - Plateforme digitale',
    technologies: ['Ionic', 'Angular', 'NestJS', 'React.js', 'TypeScript', 'Capacitor', 'SCSS'],
    links: [
      { href: 'https://helping-yourself.com/', label: 'Voir le site web' },
      { href: 'https://bo.helping-yourself.com/', label: 'Voir le back-office' },
      { href: 'https://api.helping-yourself.com/docs/', label: 'Documentation API' },
      {
        href: 'https://res.cloudinary.com/dhivn2ahm/video/upload/v1780413497/WhatsApp_Video_2026-06-02_at_15.14.37_rpaskh.mp4',
        label: 'Démo application mobile',
      },
    ],
    description:
      "Helping Yourself est une plateforme web et mobile qui centralise des services d'accompagnement, avec un paiement unifié et un suivi des demandes en temps réel.",
    achievements: [
      'Backend NestJS et interfaces React.js / Angular',
      'Application mobile hybride avec Ionic et Capacitor',
      "Back-office et documentation d'API",
      'Gestion des rôles, des permissions et des parcours utilisateurs',
    ],
    companyAbout:
      'Kahfi SN porte la plateforme Helping Yourself, un écosystème digital d’accompagnement multi-domaines avec paiement unifié et suivi des demandes.',
    location: 'Dakar, Sénégal',
    contractType: 'Freelance',
    responsibilities: [
      'Développer le backend NestJS et les interfaces web',
      'Livrer l’application mobile hybride Ionic',
      'Mettre en place le back-office et la documentation API',
      'Structurer les rôles et les parcours utilisateurs',
    ],
    projects: [
      {
        title: 'Helping Yourself',
        role: 'Développeur Full-Stack',
        summary:
          'Plateforme web + mobile + back-office : services d’accompagnement, paiement unifié et suivi temps réel.',
        image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1780414855/icon_mm53ui.png',
        technologies: ['Ionic', 'Angular', 'NestJS', 'React.js', 'TypeScript', 'Capacitor', 'SCSS'],
        links: [
          { href: 'https://helping-yourself.com/', label: 'Site web' },
          { href: 'https://bo.helping-yourself.com/', label: 'Back-office' },
          { href: 'https://api.helping-yourself.com/docs/', label: 'API docs' },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'forum-des-territoires',
    period: 'Février 2026 (Freelance)',
    company: 'Forum des Territoires',
    position: 'Développeur Full-Stack',
    project: 'Refonte du site institutionnel Afrique – Europe',
    technologies: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
    links: [
      { href: 'https://forumdesterritoires.com/', label: 'Voir le site' },
      {
        href: 'https://github.com/AbdouazizDEV/Forum-des-territoires',
        label: 'Code source',
      },
    ],
    description:
      "Mission freelance de refonte complète du site du Forum des Territoires - plateforme internationale de dialogue, d'investissement et de coopération décentralisée entre l'Afrique et l'Europe. L'objectif : offrir une vitrine institutionnelle moderne pour présenter le Forum, le programme (conférences, immersion, exposition, Gaindé Awards), les parcours d'inscription / partenaires et les actualités, avec une expérience claire pour décideurs, collectivités et investisseurs. La refonte a notamment préparé l'édition 2026 à Bruxelles (3–6 juin), le site continue d'évoluer pour les éditions suivantes.",
    achievements: [
      'Refonte UI complète React.js + Tailwind CSS, responsive et orientée SEO',
      'API Node.js / Express.js pour les contenus et parcours du site',
      'Parcours institutionnels : Forum, édition, programme, participer, partenaires, actualités, contact',
      'Support multilingue (FR / EN / ES / 中文) et CTA inscription / devenir partenaire',
      'Mise en avant des temps forts : conférences, Village des Territoires, B2B/B2G/B2I, Gaindé Awards',
    ],
    companyAbout:
      "Le Forum des Territoires est une plateforme internationale dédiée au développement intégré des territoires africains. Il réunit décideurs publics, investisseurs, entreprises, collectivités, société civile et diaspora pour co-construire l'avenir des territoires - pont Afrique–Europe autour de l'habitat, de l'aménagement, du financement et de la coopération décentralisée. Organisation portée notamment par SN KINSS Holding (Charleroi & Bruxelles) avec une ancrage à Dakar. Éditions : 2025 (Bruxelles), 2026 (TANGLA Hôtel, Bruxelles - habitat), 2027 (9–12 juin, Bruxelles).",
    location: 'Remote · Bruxelles / Dakar',
    contractType: 'Freelance',
    responsibilities: [
      'Refondre entièrement l’interface et l’architecture front du site',
      'Mettre en place l’API Node.js / Express et structurer les contenus',
      'Clarifier les parcours visiteurs (programme, inscription, partenaires, médias)',
      'Optimiser le responsive, le SEO et la lisibilité institutionnelle',
      'Préparer une base évolutive pour les éditions successives du Forum',
    ],
    projects: [
      {
        title: 'Site institutionnel Forum des Territoires',
        role: 'Développeur Full-Stack',
        summary:
          "Refonte de la vitrine « Bâtir les territoires de demain » : hero, vision & missions, piliers (dialogue politique, projets bancables, connexion investisseurs–territoires), éditions passées, gouvernance et équipe. Expérience pensée pour un public institutionnel et international.",
        image: 'https://res.cloudinary.com/dhivn2ahm/image/upload/v1792395505/Logo_Forum_1_xptsgf.png',
        technologies: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
        links: [{ href: 'https://forumdesterritoires.com/', label: 'Voir le site' }],
      },
      {
        title: 'Parcours édition, programme & participation',
        role: 'Développeur Full-Stack',
        summary:
          "Structuration des pages édition et programme autour des quatre temps forts - conférences de haut niveau, exposition Village des Territoires, immersion B2B/B2G/B2I, gala Gaindé Awards - ainsi que des CTA d'inscription, devenir exposant / partenaire et des leviers thématiques (habitat, urbanisme, financement, diaspora, etc.).",
        technologies: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
        links: [{ href: 'https://forumdesterritoires.com/', label: 'Voir le parcours' }],
      },
      {
        title: 'Contenus, actualités & multilinguisme',
        role: 'Développeur Full-Stack',
        summary:
          "Mise en place d'un parcours médias / actualités, newsletter, contacts multi-pays (Belgique & Sénégal) et bascule de langues FR / EN / ES / 中文 pour une audience Afrique–Europe. Objectif : accélérer la diffusion institutionnelle et la conversion vers l'inscription ou le partenariat.",
        technologies: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
        links: [{ href: 'https://forumdesterritoires.com/', label: 'Voir le site' }],
      },
    ],
  },
  {
    id: 5,
    slug: 'eas-taggatma',
    period: 'Septembre 2025 – Novembre 2025 (CDD)',
    company: 'École au Sénégal (EAS)',
    position: 'Développeur Full-Stack',
    project: 'Plateforme éducative TaggatMa',
    technologies: ['Laravel 12', 'Angular', 'MySQL', 'Redis', 'Swagger', 'GitHub'],
    links: [
      { href: 'https://web-eas.taggatma.com/', label: 'Plateforme web EAS' },
      { href: 'https://api-eas.taggatma.com/api/documentation#', label: 'Documentation API' },
      { href: 'https://www.taggatma.com/', label: 'TaggatMa public' },
      { href: 'https://ecolesausenegal.org/', label: 'Écoles au Sénégal' },
    ],
    description:
      "CDD développeur full-stack chez École au Sénégal (EAS) pour concevoir et livrer TaggatMa, plateforme éducative d'excellence. Le produit digitalise la gestion des élèves, des cours, des professeurs et des documents officiels, avec une API Laravel documentée (Swagger), une interface Angular et un cache Redis pour la performance. TaggatMa s'inscrit dans la mission d'EAS : utiliser le numérique pour réduire les inégalités d'accès à une éducation de qualité et favoriser l'insertion via des parcours de formation professionnelle.",
    achievements: [
      'Backend Laravel 12 + API documentée Swagger (api-eas.taggatma.com)',
      'Interface Angular de la plateforme éducative (web-eas.taggatma.com)',
      'Cache Redis, MySQL et sécurisation des accès (rôles & permissions)',
      'Parcours élèves / professeurs / contenus et documents officiels',
      'Contribution à un écosystème lié à taggatma.com (formations métiers) et ecolesausenegal.org',
    ],
    companyAbout:
      "Écoles au Sénégal (EAS) - ecolesausenegal.org - utilise le numérique pour réduire les inégalités d'accès à une éducation de qualité, promouvoir les matières scientifiques et la représentativité féminine. La plateforme propose espaces élèves et professeurs, candidatures, examens & concours, bourses et orientations. TaggatMa (« école des talents multiples ») est la plateforme d'apprentissage des métiers professionnels portée dans cet écosystème : informatique & coding, marketing digital, maraîchage, aviculture, transformation de fruits et légumes - avec une cible particulière vers les jeunes des daaras (ndongos 15–30 ans), enseignants et communautés locales, pour renforcer compétences et insertion socio-professionnelle.",
    location: 'Dakar, Sénégal',
    contractType: 'CDD',
    responsibilities: [
      'Architecturer et développer le backend Laravel 12 et l’API REST',
      'Documenter l’API avec Swagger pour les intégrations et les équipes',
      'Construire l’interface Angular (parcours élèves, professeurs, contenus)',
      'Mettre en place Redis, MySQL et les contrôles d’accès par rôles',
      'Garantir performance, sécurité et qualité des livrables sur le CDD',
    ],
    projects: [
      {
        title: 'TaggatMa - plateforme éducative EAS',
        role: 'Développeur Full-Stack',
        summary:
          "Application web « Plateforme Éducative d'Excellence » pour Écoles au Sénégal : gestion des élèves, des cours, des professeurs et des documents officiels. Front Angular, API Laravel 12, MySQL, Redis et documentation Swagger - base technique de TaggatMa côté EAS.",
        technologies: ['Laravel 12', 'Angular', 'MySQL', 'Redis', 'Swagger', 'GitHub'],
        links: [
          { href: 'https://web-eas.taggatma.com/', label: 'Plateforme' },
          { href: 'https://api-eas.taggatma.com/api/documentation#', label: 'API docs' },
        ],
      },
      {
        title: 'API & back-office TaggatMa',
        role: 'Développeur Full-Stack',
        summary:
          "Conception de l'API métier (rôles, permissions, ressources pédagogiques) avec documentation Swagger ouverte, cache Redis pour les performances et sécurisation des flux entre le front Angular et les services Laravel.",
        technologies: ['Laravel 12', 'MySQL', 'Redis', 'Swagger'],
        links: [
          { href: 'https://api-eas.taggatma.com/api/documentation#', label: 'Documentation API' },
        ],
      },
      {
        title: 'Écosystème TaggatMa / EAS',
        role: 'Développeur Full-Stack',
        summary:
          "Ancrage produit dans l'écosystème EAS et TaggatMa : formations métiers (informatique, coding, CMS/LMS, agroalimentaire, maraîchage, aviculture), objectif d'insertion des jeunes et des communautés, et alignement avec la mission numérique d'Écoles au Sénégal (espaces élèves/professeurs, examens, bourses).",
        technologies: ['Laravel 12', 'Angular', 'MySQL'],
        links: [
          { href: 'https://www.taggatma.com/', label: 'taggatma.com' },
          { href: 'https://ecolesausenegal.org/', label: 'ecolesausenegal.org' },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'xarala',
    period: 'Août 2025',
    company: 'Xarala',
    position: 'Développeur Full-Stack',
    project: "Plateforme d'avance sur salaire",
    technologies: ['Next.js', 'NestJS', 'React Native', 'MySQL', 'GitLab'],
    description:
      "Plateforme d'avance sur salaire en trois volets : application mobile pour les employés, site web pour les entreprises et back-office d'administration.",
    achievements: [
      'Application mobile React Native',
      'Site web et back-office avec Next.js',
      'API NestJS et base MySQL',
      'Versionnement et collaboration sur GitLab',
    ],
    companyAbout:
      'Xarala forme des talents au numérique et développe aussi des produits fintech. Mission sur une plateforme d’avance sur salaire multi-canal.',
    location: 'Dakar, Sénégal',
    contractType: 'Mission',
    responsibilities: [
      'Développer l’application mobile React Native',
      'Construire le site entreprises et le back-office Next.js',
      'Mettre en place l’API NestJS et MySQL',
      'Collaborer via GitLab sur un rythme produit serré',
    ],
    projects: [
      {
        title: "Plateforme d'avance sur salaire",
        role: 'Développeur Full-Stack',
        summary:
          'Écosystème en trois volets : app employés, site entreprises et back-office d’administration.',
        technologies: ['Next.js', 'NestJS', 'React Native', 'MySQL', 'GitLab'],
      },
    ],
  },
  {
    id: 7,
    slug: 'niane-technologie',
    period: 'Mars 2025 – Avril 2025',
    company: 'Niane Technologie',
    position: 'Développeur Full-Stack',
    project: "Assemblée Nationale du Sénégal et The Booker's",
    technologies: ['Laravel', 'Angular 18', 'PostgreSQL', 'Supabase', 'MySQL', 'GitLab', 'LWS'],
    links: [
      { href: 'https://www.assemblee.sn/fr', label: 'Assemblée Nationale' },
      { href: 'https://bo-thebookers.nianetechnologies.com/', label: "The Booker's" },
    ],
    description:
      "Contribution à la plateforme de l'Assemblée Nationale du Sénégal, puis mise en place de The Booker's, application de réservation de tables pour restaurants.",
    achievements: [
      'Plateforme institutionnelle pour députés et ministères',
      'Réservation de tables et back-office restaurateur',
      'API, bases PostgreSQL, MySQL et Supabase',
      'Livraison et versionnement avec GitLab et LWS',
    ],
    companyAbout:
      'Niane Technologie livre des plateformes web pour des clients institutionnels et privés. Mission sur l’Assemblée Nationale et The Booker’s.',
    location: 'Dakar, Sénégal',
    contractType: 'Mission',
    responsibilities: [
      'Contribuer à la plateforme institutionnelle de l’Assemblée Nationale',
      'Développer The Booker’s (réservation + back-office)',
      'Intégrer Laravel, Angular, PostgreSQL / MySQL / Supabase',
      'Livrer et déployer via GitLab et LWS',
    ],
    projects: [
      {
        title: 'Assemblée Nationale du Sénégal',
        role: 'Développeur Full-Stack',
        summary:
          'Plateforme officielle : gestion des députés, sessions et documents officiels.',
        image:
          'https://res.cloudinary.com/dhivn2ahm/image/upload/v1751498219/Assemblee-Nationale-Senegalaise-_wjdc4u.jpg',
        technologies: ['Laravel', 'Angular 18', 'PostgreSQL', 'GitLab'],
        links: [{ href: 'https://www.assemblee.sn/fr', label: 'Voir le site' }],
      },
      {
        title: "The Booker's",
        role: 'Développeur Full-Stack',
        summary:
          'Application de réservation de tables pour restaurants, avec interface client et back-office.',
        image:
          'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['Laravel', 'Angular 18', 'Supabase', 'MySQL'],
        links: [{ href: 'https://bo-thebookers.nianetechnologies.com/', label: 'Back-office' }],
      },
    ],
  },
];

export function getExperienceBySlug(slug: string): ExperienceItem | undefined {
  return experiences.find((exp) => exp.slug === slug);
}
