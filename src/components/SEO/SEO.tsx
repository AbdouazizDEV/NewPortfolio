import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Abdou Aziz Diop - Développeur Full-Stack | Portfolio Professionnel",
  description = "Portfolio d'Abdou Aziz Diop, Développeur Full-Stack expérimenté spécialisé en React, Laravel, Node.js, Angular. 3+ ans d'expérience. Basé à Dakar, Sénégal.",
  keywords = "développeur full-stack, développeur web, React, Laravel, Node.js, Angular, TypeScript, JavaScript, développeur Sénégal, développeur Dakar",
  image = "https://res.cloudinary.com/dhivn2ahm/image/upload/v1739929505/WhatsApp_Image_2024-04-29_at_17.09.21_1_-removebg-preview_bvo4sq.jpg",
  url = "https://abdouazizdiop.dev",
  type = "website"
}: SEOProps) => {
  useEffect(() => {
    // Mettre à jour le titre
    document.title = title;

    // Fonction helper pour mettre à jour ou créer une meta tag
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Mettre à jour les meta tags de base
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('title', title);

    // Mettre à jour les Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:type', type, 'property');

    // Mettre à jour les Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:url', url);

    // Mettre à jour le canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;



