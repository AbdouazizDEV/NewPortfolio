import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

type HeaderProps = {
  forceSolid?: boolean;
};

const Header = ({ forceSolid = false }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isEn = i18n.language?.startsWith('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solid = forceSolid || isScrolled;

  const navItems = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const goToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const cvUrl =
      'https://drive.google.com/file/d/19aM9FZuYZdWRJ1NUaQWs2LxrIVEd3YCF/view?usp=sharing';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Abdou_Aziz_Diop.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const switchLanguage = (lng: 'fr' | 'en') => {
    void i18n.changeLanguage(lng);
  };

  const LanguageToggle = ({ className = '' }: { className?: string }) => (
    <div
      className={`inline-flex items-center rounded-full border p-0.5 text-xs font-semibold ${className} ${
        solid ? 'border-stone-200 bg-stone-50' : 'border-white/20 bg-white/5'
      }`}
      role="group"
      aria-label={t('lang.switchTo')}
    >
      <button
        type="button"
        onClick={() => switchLanguage('fr')}
        className={`rounded-full px-2.5 py-1 transition ${
          !isEn
            ? 'bg-emerald-800 text-white'
            : solid
              ? 'text-stone-600 hover:text-emerald-800'
              : 'text-white/70 hover:text-white'
        }`}
      >
        {t('lang.fr')}
      </button>
      <button
        type="button"
        onClick={() => switchLanguage('en')}
        className={`rounded-full px-2.5 py-1 transition ${
          isEn
            ? 'bg-emerald-800 text-white'
            : solid
              ? 'text-stone-600 hover:text-emerald-800'
              : 'text-white/70 hover:text-white'
        }`}
      >
        {t('lang.en')}
      </button>
    </div>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-gray-200/20 bg-white/90 shadow-lg backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-800 text-sm font-bold text-white">
              AAD
            </div>
            <span className={`text-xl font-bold ${solid ? 'text-gray-800' : 'text-white'}`}>
              Abdou Aziz
            </span>
          </Link>

          <nav className="hidden items-center space-x-6 lg:space-x-8 md:flex">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                type="button"
                onClick={() => goToSection(item.href)}
                whileHover={{ y: -2 }}
                className={`font-medium transition-colors duration-200 ${
                  solid
                    ? 'text-gray-700 hover:text-emerald-700'
                    : 'text-white/85 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.name}
              </motion.button>
            ))}

            <LanguageToggle />

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="flex items-center space-x-2 rounded-full bg-emerald-800 px-4 py-2 text-white transition-all duration-200 hover:bg-emerald-900"
            >
              <Download size={16} />
              <span>{t('nav.cv')}</span>
            </motion.button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`rounded-lg p-2 ${
                solid ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white/95 backdrop-blur-lg md:hidden"
          >
            <div className="space-y-2 py-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => goToSection(item.href)}
                  className="block w-full rounded-lg px-4 py-2 text-left text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-600"
                >
                  {item.name}
                </button>
              ))}
              <button
                type="button"
                onClick={downloadCV}
                className="mt-4 flex w-full items-center justify-center space-x-2 rounded-full bg-emerald-800 px-4 py-2 text-white"
              >
                <Download size={16} />
                <span>{t('nav.downloadCv')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
