export type ExperienceEnContent = {
  period: string;
  position: string;
  project: string;
  description: string;
  companyAbout: string;
  location: string;
  contractType: string;
  achievements: string[];
  responsibilities: string[];
  linkLabels?: Record<string, string>; // keyed by href
  projects: {
    title: string;
    role: string;
    summary: string;
    linkLabels?: Record<string, string>; // keyed by href
  }[];
};

export const experiencesEn: Record<string, ExperienceEnContent> = {
  sdmi: {
    period: 'September 2026 – Present (Freelance)',
    position: 'Full-Stack Developer',
    project: 'Catalog web platform, Dakar stock and industrial quotes',
    description:
      'Ongoing freelance engagement for SDMI: design and development of a bilingual (FR/EN) Next.js web platform that digitalizes the technical catalog, the Dakar stock and the sales journey. The goal is to let industrial buyers quickly find a reference (DN, PN, material, standard), filter the stock and request a quote or a tender (AO) response within 24 hours, while showcasing the Bopp branch and the compliance of the supplies.',
    companyAbout:
      'SDMI (Sénégalaise de distribution de matériels industriels) is an approved DIN / ANSI / ISO distributor based in Dakar (Bopp, rue 2 × Casamance) for over 15 years. The company supports industries in Senegal and West Africa with valves, piping, filtration, measurement and fittings, with 12,000+ references in stock, structured quotes within 24 hours and full traceability (EN 10204 type 3.1 certificates, CE / PED). Reference clients: TotalEnergies Sénégal, SAR, Vivo Energy, Compagnie Sucrière Sénégalaise, Eramet Grande Côte, Suez, and more.',
    location: 'Dakar, Senegal - Bopp',
    contractType: 'Freelance',
    achievements: [
      'Bilingual French / English platform with catalog navigation and business content',
      'Dakar stock selector: equipment type, DN diameter, PN/Class pressure, metallurgy',
      'Catalog by families: valves, piping, flanges, fittings, oil industry valves, sealing',
      'Quick quote / pricing journey, reference basket and WhatsApp Pro CTA',
      'Sector pages, about, documentation & certificates, contact & branch directions',
    ],
    responsibilities: [
      'Architect and develop the bilingual FR/EN Next.js catalog platform',
      'Model product families and technical criteria (DN, PN, materials, standards)',
      'Design the stock selector, catalog search and quote journey',
      'Structure the sector pages (fire protection, water–oil–gas, food processing, mining)',
      'Highlight compliance, technical documentation and branch / WhatsApp contact',
      'Iterate with the client on business UX (professional counter, tenders, depot pickup)',
    ],
    linkLabels: {
      'https://sdmi-eta.vercel.app/fr': 'View the site (FR)',
      'https://sdmi-eta.vercel.app/en': 'English version',
    },
    projects: [
      {
        title: 'SDMI Catalog Platform',
        role: 'Full-Stack Developer',
        summary:
          'Showcase website and technical catalog for industrial distribution: sector-based hero, supply families (valves, piping, flanges, accessories), search by reference / DN / standard, and a strong emphasis on the "approved DIN / ANSI / ISO distributor" positioning with Dakar stock and quotes within 24 hours.',
        linkLabels: {
          'https://sdmi-eta.vercel.app/fr': 'View the site',
        },
      },
      {
        title: 'Stock Selector & Technical Filters',
        role: 'Full-Stack Developer',
        summary:
          'Business filtering module for the Dakar stock: equipment type (ball valves, butterfly valves, check valves, filtration, fittings), diameter DN15→DN600+, working pressure (PN10 to PN63+, Class 150/300) and metallurgy (316/304 stainless steel, ductile iron, A105/WCB steel, brass). Goal: speed up field selection before quoting.',
        linkLabels: {
          'https://sdmi-eta.vercel.app/fr': 'Try the selector',
        },
      },
      {
        title: 'Quote Journey, Sectors & Branch',
        role: 'Full-Stack Developer',
        summary:
          'Digital sales journey: "Request a quote" basket, quick pricing, sector pages (fire protection / sprinklers, water–oil–gas fluids, stainless steel food processing, mining industry), documentation & certificates, about page (15+ years, 12,000+ refs) and Bopp depot contact with WhatsApp Pro and counter opening hours.',
        linkLabels: {
          'https://sdmi-eta.vercel.app/fr/a-propos': 'About',
          'https://sdmi-eta.vercel.app/fr/contact': 'Contact & branch',
        },
      },
    ],
  },

  dizigroup: {
    period: 'March 2026 – Present',
    position: 'Full-Stack Developer & Tech Lead',
    project: 'Technical leadership, Quizz+, Kondaktor and corporate website',
    description:
      "As Tech Lead at DIZIGROUP, I drive the architecture of the company's projects - a fintech and digital transformation startup - build digital solutions, lead the development teams and ensure the quality of deliverables. During this period, I delivered the corporate website, the Quizz+ ecosystem (mobile, web and back-office) and the Kondaktor platform (web application and back-office).",
    companyAbout:
      'DIZIGROUP positions itself as a digital execution infrastructure based in Dakar: consulting & strategy, services & solutions, talent & organization, offshore & delivery. The group also builds its own ventures - Quizz+ (EdTech & gaming), DiziPay (fintech / payment orchestration), Impaktor (incubation) and Kondaktor (organizational orchestration with AI agents under human governance).',
    location: 'Dakar, Senegal',
    contractType: 'Tech Lead',
    achievements: [
      'Led the technical architecture across DIZIGROUP products (fintech & digital transformation)',
      'Team mentoring and quality review of deliverables',
      'DIZIGROUP corporate website: showcase of digital engineering and ventures',
      'Quizz+: mobile app, web app and back-office (sole developer on the web app and the back-office)',
      'Kondaktor: organizational orchestration web application and back-office',
    ],
    responsibilities: [
      "Drive the technical architecture of the company's projects (fintech and digital transformation startup)",
      'Develop end-to-end web and mobile digital solutions',
      'Lead the development teams and align technical skills with business challenges',
      'Ensure the quality, consistency and maintainability of deliverables',
      'Structure the back-offices and product journeys (Quizz+, Kondaktor)',
    ],
    linkLabels: {
      'https://dizigroup.net/': 'DIZIGROUP website',
      'https://quizzp.com/accueil': 'Quizz+',
      'https://www.kondaktor.com/': 'Kondaktor',
    },
    projects: [
      {
        title: 'DIZIGROUP Website',
        role: 'Full-Stack Developer',
        summary:
          'DIZIGROUP corporate website - "Digital engineering at the service of African innovation". Presentation of the four pillars (consulting, solutions, talent, offshore), the venture portfolio (Quizz+, DiziPay, Impaktor, Kondaktor) and the client / investor / expert journeys. Built with Next.js.',
        linkLabels: {
          'https://dizigroup.net/': 'View the site',
        },
      },
      {
        title: 'Quizz+',
        role: 'Tech Lead & Developer (mobile + web + back-office)',
        summary:
          'Gamified quiz platform for Africa and the French-speaking world: duels, leaderboards and rewards. I worked on the mobile app (React Native / Expo) as well as on the web app and the back-office as the sole developer - quiz arena, categories (culture, sports, tech, society), player challenges and partner journeys.',
        linkLabels: {
          'https://quizzp.com/accueil': 'View the site',
          'https://res.cloudinary.com/dhivn2ahm/video/upload/v1780414312/WhatsApp_Video_2026-06-02_at_15.15.12_tsutdv.mp4':
            'Video demo',
        },
      },
      {
        title: 'Kondaktor',
        role: 'Tech Lead & Developer (web application + back-office)',
        summary:
          'Organizational orchestration system that connects strategy, decisions, actions, projects, knowledge, processes and AI agents under human governance. I worked on the web application and the back-office: information → decision → action → outcome cycle, strategy / decisions / actions / projects modules, and an aligned execution vision for organizations.',
        linkLabels: {
          'https://www.kondaktor.com/': 'View the site',
        },
      },
    ],
  },

  'jant-tech': {
    period: 'April 2026 – June 2026 (Freelance)',
    position: 'Mobile Developer',
    project: "La Cuisine de Maman, JantAgro and Let's GO",
    description:
      "Freelance mobile developer engagement at JANT TECH SARL: design and delivery of Ionic / Angular / Capacitor applications tailored to African realities. During this cycle, I built La Cuisine de Maman (restaurant), the JantAgro mobile app (formerly Jant-couvoir) for poultry and agricultural farming, and Let's GO, an on-demand urban mobility app (rides, driver–passenger matching, trip tracking).",
    companyAbout:
      'JANT TECH SARL (jant.tech) designs smart digital solutions for African businesses: SaaS products (JantBi for commerce, JantPharma for healthcare, JantAgro for farming) and custom web & mobile applications. Based in Dakar, the team supports more than 50 companies in their digital transformation, with a local, scalable and results-driven approach (agriculture, commerce, healthcare, real estate, industry, administration).',
    location: 'Dakar, Senegal',
    contractType: 'Freelance',
    achievements: [
      'La Cuisine de Maman restaurant app built with Ionic, Angular and TypeScript',
      'JantAgro mobile application (formerly Jant-couvoir): livestock tracking, farming and production in the field',
      "Let's GO: urban mobility and on-demand ride mobile application",
      'iOS and Android builds via Capacitor, UX designed for field use',
    ],
    responsibilities: [
      'Design Ionic mobile screens and user journeys',
      'Develop Angular / TypeScript / Capacitor applications',
      'Adapt interfaces to field usage (restaurant, farming, mobility)',
      'Prepare iOS and Android builds and iterate on client feedback',
    ],
    linkLabels: {
      'https://jant.tech/': 'Jant Tech website',
      'https://jant.tech/jantagro': 'JantAgro',
      'https://res.cloudinary.com/dhivn2ahm/video/upload/v1775995317/WhatsApp_Video_2026-04-12_at_11.59.07_yiuhky.mp4':
        'La Cuisine de Maman demo',
    },
    projects: [
      {
        title: 'La Cuisine de Maman',
        role: 'Mobile Developer',
        summary:
          'Ionic mobile application for a restaurant: menu browsing, customer journey and an experience designed for everyday smartphone use. Delivered with a video demo and Capacitor deployment.',
        linkLabels: {
          'https://res.cloudinary.com/dhivn2ahm/video/upload/v1775995317/WhatsApp_Video_2026-04-12_at_11.59.07_yiuhky.mp4':
            'Video demo',
        },
      },
      {
        title: 'JantAgro (formerly Jant-couvoir)',
        role: 'Mobile Developer (Ionic)',
        summary:
          'Mobile component of JantAgro, a SaaS solution for poultry and agricultural farm management (livestock tracking, feed management, production analytics). I worked exclusively on the Ionic mobile app, enabling farmers to monitor activity from the field - farms, hatcheries and production.',
        linkLabels: {
          'https://jant.tech/jantagro': 'Discover JantAgro',
        },
      },
      {
        title: "Let's GO",
        role: 'Mobile Developer',
        summary:
          'Urban mobility mobile application: order an on-demand ride, match passengers with drivers, track the trip in real time and streamline the booking journey. Designed for everyday city use, with a simple and responsive experience on iOS and Android via Capacitor.',
      },
    ],
  },

  'kahfi-sn': {
    period: 'May 2026 (Freelance)',
    position: 'Full-Stack Developer',
    project: 'Helping Yourself (HYS) - Digital platform',
    description:
      'Helping Yourself is a web and mobile platform that centralizes support services, with unified payment and real-time request tracking.',
    companyAbout:
      'Kahfi SN runs the Helping Yourself platform, a multi-domain digital support ecosystem with unified payment and request tracking.',
    location: 'Dakar, Senegal',
    contractType: 'Freelance',
    achievements: [
      'NestJS backend and React.js / Angular interfaces',
      'Hybrid mobile application with Ionic and Capacitor',
      'Back-office and API documentation',
      'Role and permission management and user journeys',
    ],
    responsibilities: [
      'Develop the NestJS backend and web interfaces',
      'Deliver the Ionic hybrid mobile application',
      'Set up the back-office and API documentation',
      'Structure roles and user journeys',
    ],
    linkLabels: {
      'https://helping-yourself.com/': 'View the website',
      'https://bo.helping-yourself.com/': 'View the back-office',
      'https://api.helping-yourself.com/docs/': 'API documentation',
      'https://res.cloudinary.com/dhivn2ahm/video/upload/v1780413497/WhatsApp_Video_2026-06-02_at_15.14.37_rpaskh.mp4':
        'Mobile app demo',
    },
    projects: [
      {
        title: 'Helping Yourself',
        role: 'Full-Stack Developer',
        summary:
          'Web + mobile + back-office platform: support services, unified payment and real-time tracking.',
        linkLabels: {
          'https://helping-yourself.com/': 'Website',
          'https://bo.helping-yourself.com/': 'Back-office',
          'https://api.helping-yourself.com/docs/': 'API docs',
        },
      },
    ],
  },

  'forum-des-territoires': {
    period: 'February 2026 (Freelance)',
    position: 'Full-Stack Developer',
    project: 'Redesign of the Africa – Europe institutional website',
    description:
      'Freelance engagement to completely redesign the Forum des Territoires website - an international platform for dialogue, investment and decentralized cooperation between Africa and Europe. The goal: provide a modern institutional showcase presenting the Forum, its program (conferences, immersion, exhibition, Gaindé Awards), registration / partner journeys and news, with a clear experience for decision-makers, local authorities and investors. The redesign notably prepared the 2026 edition in Brussels (June 3–6), and the site continues to evolve for upcoming editions.',
    companyAbout:
      'The Forum des Territoires is an international platform dedicated to the integrated development of African territories. It brings together public decision-makers, investors, companies, local authorities, civil society and the diaspora to co-build the future of territories - an Africa–Europe bridge around housing, planning, financing and decentralized cooperation. The organization is notably led by SN KINSS Holding (Charleroi & Brussels) with a base in Dakar. Editions: 2025 (Brussels), 2026 (TANGLA Hotel, Brussels - housing), 2027 (June 9–12, Brussels).',
    location: 'Remote · Brussels / Dakar',
    contractType: 'Freelance',
    achievements: [
      'Complete UI redesign with React.js + Tailwind CSS, responsive and SEO-oriented',
      'Node.js / Express.js API for site content and journeys',
      'Institutional journeys: Forum, edition, program, participate, partners, news, contact',
      'Multilingual support (FR / EN / ES / 中文) and registration / become a partner CTAs',
      'Highlights of key moments: conferences, Village des Territoires, B2B/B2G/B2I, Gaindé Awards',
    ],
    responsibilities: [
      "Completely redesign the site's interface and front-end architecture",
      'Set up the Node.js / Express API and structure the content',
      'Clarify visitor journeys (program, registration, partners, media)',
      'Optimize responsiveness, SEO and institutional readability',
      'Prepare an evolving foundation for the Forum’s successive editions',
    ],
    linkLabels: {
      'https://forumdesterritoires.com/': 'View the site',
      'https://github.com/AbdouazizDEV/Forum-des-territoires': 'Source code',
    },
    projects: [
      {
        title: 'Forum des Territoires Institutional Website',
        role: 'Full-Stack Developer',
        summary:
          'Redesign of the "Building the territories of tomorrow" showcase: hero, vision & missions, pillars (political dialogue, bankable projects, investor–territory connection), past editions, governance and team. An experience designed for an institutional and international audience.',
        linkLabels: {
          'https://forumdesterritoires.com/': 'View the site',
        },
      },
      {
        title: 'Edition, Program & Participation Journey',
        role: 'Full-Stack Developer',
        summary:
          'Structuring of the edition and program pages around the four key moments - high-level conferences, Village des Territoires exhibition, B2B/B2G/B2I immersion, Gaindé Awards gala - along with registration, become an exhibitor / partner CTAs and thematic levers (housing, urban planning, financing, diaspora, etc.).',
        linkLabels: {
          'https://forumdesterritoires.com/': 'View the journey',
        },
      },
      {
        title: 'Content, News & Multilingualism',
        role: 'Full-Stack Developer',
        summary:
          'Implementation of a media / news journey, newsletter, multi-country contacts (Belgium & Senegal) and language switching FR / EN / ES / 中文 for an Africa–Europe audience. Goal: accelerate institutional communication and conversion towards registration or partnership.',
        linkLabels: {
          'https://forumdesterritoires.com/': 'View the site',
        },
      },
    ],
  },

  'eas-taggatma': {
    period: 'September 2025 – November 2025 (Fixed-term contract)',
    position: 'Full-Stack Developer',
    project: 'TaggatMa educational platform',
    description:
      "Fixed-term full-stack developer contract at École au Sénégal (EAS) to design and deliver TaggatMa, an educational platform of excellence. The product digitalizes the management of students, courses, teachers and official documents, with a documented Laravel API (Swagger), an Angular interface and a Redis cache for performance. TaggatMa is part of EAS's mission: using digital technology to reduce inequalities in access to quality education and support integration through vocational training paths.",
    companyAbout:
      'Écoles au Sénégal (EAS) - ecolesausenegal.org - uses digital technology to reduce inequalities in access to quality education and to promote science subjects and female representation. The platform offers student and teacher spaces, applications, exams & competitions, scholarships and guidance. TaggatMa ("school of multiple talents") is the vocational skills learning platform carried within this ecosystem: IT & coding, digital marketing, market gardening, poultry farming, fruit and vegetable processing - with a particular focus on young people from the daaras (ndongos aged 15–30), teachers and local communities, to strengthen skills and socio-professional integration.',
    location: 'Dakar, Senegal',
    contractType: 'Fixed-term contract',
    achievements: [
      'Laravel 12 backend + Swagger-documented API (api-eas.taggatma.com)',
      'Angular interface for the educational platform (web-eas.taggatma.com)',
      'Redis cache, MySQL and access security (roles & permissions)',
      'Student / teacher / content journeys and official documents',
      'Contribution to an ecosystem linked to taggatma.com (vocational training) and ecolesausenegal.org',
    ],
    responsibilities: [
      'Architect and develop the Laravel 12 backend and the REST API',
      'Document the API with Swagger for integrations and teams',
      'Build the Angular interface (student, teacher and content journeys)',
      'Set up Redis, MySQL and role-based access controls',
      'Ensure performance, security and quality of deliverables throughout the contract',
    ],
    linkLabels: {
      'https://web-eas.taggatma.com/': 'EAS web platform',
      'https://api-eas.taggatma.com/api/documentation#': 'API documentation',
      'https://www.taggatma.com/': 'TaggatMa public site',
      'https://ecolesausenegal.org/': 'Écoles au Sénégal',
    },
    projects: [
      {
        title: 'TaggatMa - EAS educational platform',
        role: 'Full-Stack Developer',
        summary:
          'Web application "Educational Platform of Excellence" for Écoles au Sénégal: management of students, courses, teachers and official documents. Angular front-end, Laravel 12 API, MySQL, Redis and Swagger documentation - the technical foundation of TaggatMa on the EAS side.',
        linkLabels: {
          'https://web-eas.taggatma.com/': 'Platform',
          'https://api-eas.taggatma.com/api/documentation#': 'API docs',
        },
      },
      {
        title: 'TaggatMa API & Back-office',
        role: 'Full-Stack Developer',
        summary:
          'Design of the business API (roles, permissions, educational resources) with open Swagger documentation, Redis cache for performance and secured data flows between the Angular front-end and the Laravel services.',
        linkLabels: {
          'https://api-eas.taggatma.com/api/documentation#': 'API documentation',
        },
      },
      {
        title: 'TaggatMa / EAS Ecosystem',
        role: 'Full-Stack Developer',
        summary:
          "Product anchoring in the EAS and TaggatMa ecosystem: vocational training (IT, coding, CMS/LMS, food processing, market gardening, poultry farming), goal of integrating young people and communities, and alignment with Écoles au Sénégal's digital mission (student/teacher spaces, exams, scholarships).",
        linkLabels: {
          'https://www.taggatma.com/': 'taggatma.com',
          'https://ecolesausenegal.org/': 'ecolesausenegal.org',
        },
      },
    ],
  },

  xarala: {
    period: 'August 2025',
    position: 'Full-Stack Developer',
    project: 'Salary advance platform',
    description:
      'Salary advance platform in three parts: a mobile application for employees, a website for companies and an administration back-office.',
    companyAbout:
      'Xarala trains digital talent and also develops fintech products. Engagement on a multi-channel salary advance platform.',
    location: 'Dakar, Senegal',
    contractType: 'Contract engagement',
    achievements: [
      'React Native mobile application',
      'Website and back-office with Next.js',
      'NestJS API and MySQL database',
      'Version control and collaboration on GitLab',
    ],
    responsibilities: [
      'Develop the React Native mobile application',
      'Build the company website and the Next.js back-office',
      'Set up the NestJS API and MySQL',
      'Collaborate via GitLab at a fast product pace',
    ],
    projects: [
      {
        title: 'Salary Advance Platform',
        role: 'Full-Stack Developer',
        summary:
          'Three-part ecosystem: employee app, company website and administration back-office.',
      },
    ],
  },

  'niane-technologie': {
    period: 'March 2025 – April 2025',
    position: 'Full-Stack Developer',
    project: "Senegal's National Assembly and The Booker's",
    description:
      "Contribution to the Senegalese National Assembly platform, followed by the development of The Booker's, a table reservation application for restaurants.",
    companyAbout:
      "Niane Technologie delivers web platforms for institutional and private clients. Engagement on the National Assembly and The Booker's.",
    location: 'Dakar, Senegal',
    contractType: 'Contract engagement',
    achievements: [
      'Institutional platform for members of parliament and ministries',
      'Table reservation and restaurant owner back-office',
      'API, PostgreSQL, MySQL and Supabase databases',
      'Delivery and version control with GitLab and LWS',
    ],
    responsibilities: [
      'Contribute to the National Assembly institutional platform',
      "Develop The Booker's (reservation + back-office)",
      'Integrate Laravel, Angular, PostgreSQL / MySQL / Supabase',
      'Deliver and deploy via GitLab and LWS',
    ],
    linkLabels: {
      'https://www.assemblee.sn/fr': 'National Assembly',
      'https://bo-thebookers.nianetechnologies.com/': "The Booker's",
    },
    projects: [
      {
        title: "Senegal's National Assembly",
        role: 'Full-Stack Developer',
        summary:
          'Official platform: management of members of parliament, sessions and official documents.',
        linkLabels: {
          'https://www.assemblee.sn/fr': 'View the site',
        },
      },
      {
        title: "The Booker's",
        role: 'Full-Stack Developer',
        summary:
          'Table reservation application for restaurants, with a customer interface and a back-office.',
        linkLabels: {
          'https://bo-thebookers.nianetechnologies.com/': 'Back-office',
        },
      },
    ],
  },
};
