import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Layers, Waypoints } from 'lucide-react';
import {
  SiIonic,
  SiCapacitor,
  SiReact,
  SiExpo,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiGithubactions,
  SiNestjs,
  SiLaravel,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiMysql,
  SiDocker,
  SiGit,
  SiLinux,
  SiDigitalocean,
  SiTypescript,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Développeur Full-Stack', 'Développeur Mobile', 'Responsable technique'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stack: { name: string; icon: IconType; color: string }[] = [
    { name: 'Ionic', icon: SiIonic, color: '#3880FF' },
    { name: 'Capacitor', icon: SiCapacitor, color: '#119EFF' },
    { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    { name: 'Expo', icon: SiExpo, color: '#FFFFFF' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    { name: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF' },
    { name: 'Architecture', icon: Layers, color: '#A7F3D0' },
    { name: 'APIs REST', icon: Waypoints, color: '#A7F3D0' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-[#07140f] text-[#f4f1ea]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-emerald-200/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
            Dakar · Produits web & mobile
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Abdou Aziz
            <span className="block text-emerald-300">Diop</span>
          </h1>

          <div className="mt-6 h-8 text-xl font-medium text-emerald-100/80 sm:text-2xl">
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block"
            >
              {roles[currentRole]}
            </motion.span>
          </div>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-emerald-50/75">
            Responsable technique et développeur full-stack. J'architecture des plateformes,
            je livre des applications mobiles en production et j'encadre la qualité des livrables.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollToSection('#projects')}
              className="inline-flex items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
            >
              Voir les projets
              <ArrowUpRight size={16} className="ml-2" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Me contacter
            </button>
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { icon: Github, href: 'https://github.com/AbdouaziDEV', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/abdou-aziz-diop-b1aa05287/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:abdouazizdiop583@gmail.com', label: 'Email' }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-emerald-50 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-emerald-900/90" />
          <img
            src="https://res.cloudinary.com/dhivn2ahm/image/upload/v1792395695/Gemini_Generated_Image_csruf5csruf5csru_1_oiah8y.jpg"
            alt="Abdou Aziz Diop"
            className="relative aspect-[4/5] w-full rounded-[1.7rem] object-cover object-top"
          />
        </motion.div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="overflow-hidden py-4">
          <div className="marquee-track flex w-max items-center gap-8 pr-8">
            {[...stack, ...stack].map((item, index) => (
              <span
                key={`${item.name}-${index}`}
                title={item.name}
                aria-label={item.name}
                className="inline-flex items-center justify-center"
              >
                <item.icon size={28} color={item.color} aria-hidden />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
