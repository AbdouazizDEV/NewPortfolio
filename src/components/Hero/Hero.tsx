import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

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

  const stack = ['Ionic', 'Capacitor', 'React Native', 'Expo', 'Angular', 'NestJS', 'Laravel', 'Next.js', 'PostgreSQL', 'Architecture', 'APIs REST', 'TypeScript'];

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
            src="https://res.cloudinary.com/dhivn2ahm/image/upload/v1739929505/WhatsApp_Image_2024-04-29_at_17.09.21_1_-removebg-preview_bvo4sq.jpg"
            alt="Abdou Aziz Diop"
            className="relative aspect-[4/5] w-full rounded-[1.7rem] object-cover object-top"
          />
        </motion.div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="overflow-hidden py-4">
          <div className="marquee-track flex w-max gap-10 pr-10 text-sm font-medium uppercase tracking-[0.22em] text-emerald-100/70">
            {[...stack, ...stack].map((item, index) => (
              <span key={`${item}-${index}`} className="whitespace-nowrap">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
