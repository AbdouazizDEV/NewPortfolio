import React from 'react';
import { motion } from 'framer-motion';
import SEO from './components/SEO/SEO';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <SEO />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;