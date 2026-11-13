import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#14241c]">
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
};

export default Home;
