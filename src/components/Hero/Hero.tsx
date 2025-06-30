import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Code, Cpu, Database, Globe } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Développeur Backend', 'Développeur Frontend'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Tech Background Animations */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Code Lines */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.1, x: 100 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 text-emerald-300 font-mono text-sm"
        >
          &lt;div className="tech"&gt;
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.1, x: -100 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-40 right-20 text-blue-300 font-mono text-sm"
        >
          {'function createPortfolio() {'}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 0.1, y: 50 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute bottom-40 left-20 text-emerald-300 font-mono text-sm"
        >
          return &lt;React&gt;;
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/4 left-1/4 text-emerald-400/30"
        >
          <Code size={40} />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -360]
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/3 right-1/3 text-blue-400/30"
        >
          <Cpu size={35} />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 },
            rotate: { duration: 18, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-1/3 left-1/3 text-emerald-400/30"
        >
          <Database size={30} />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -360]
          }}
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 },
            rotate: { duration: 22, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-1/4 right-1/4 text-blue-400/30"
        >
          <Globe size={45} />
        </motion.div>

        {/* Animated Geometric Shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-emerald-300/20 rounded-full"
        />

        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-blue-300/20 transform rotate-45"
        />

        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            rotate: { duration: 35, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-emerald-400/15 rounded-full"
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: (i * 100) % 800,
              y: (i * 80) % 600,
              opacity: 0
            }}
            animate={{ 
              x: ((i + 1) * 120) % 800,
              y: ((i + 2) * 100) % 600,
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 8 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.6
            }}
            className="absolute w-2 h-2 bg-emerald-400/40 rounded-full"
          />
        ))}

        {/* Circuit Lines */}
        <motion.div
          animate={{ 
            pathLength: [0, 1, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
        />

        <motion.div
          animate={{ 
            pathLength: [0, 1, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/3 w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        />

        {/* Original Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-emerald-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-emerald-600 font-medium text-lg mb-4"
            >
              Bonjour, je suis
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Abdou Aziz
              <span className="text-emerald-600"> DIOP</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
            >
              Développeur Full-Stack
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 mb-2 h-8"
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-emerald-600 font-medium"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Passionné par la création d'applications web modernes et performantes, 
              je transforme vos idées en solutions digitales innovantes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Voir mes projets
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-full font-medium hover:bg-emerald-50 transition-all duration-300"
              >
                Me contacter
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                { icon: Github, href: 'https://github.com/AbdouaziDEV', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/abdou-aziz-diop-b1aa05287/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:abdouazizdiop583@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-gray-600 hover:text-emerald-600 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-100 h-100 rounded-full overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src="https://res.cloudinary.com/dhivn2ahm/image/upload/v1739929505/WhatsApp_Image_2024-04-29_at_17.09.21_1_-removebg-preview_bvo4sq.jpg"
                  alt="Abdou Aziz Diop"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur opacity-30 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-emerald-600 transition-colors"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;