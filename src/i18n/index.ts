import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.learningHub': 'Learning Hub',
      'nav.aboutThomas': 'About Thomas',
      'nav.getGuide': 'Get the Free Guide',
      
      // Footer - Quick Start
      'footer.quickStart': 'Quick Start',
      'footer.quiz': 'Quiz',
      'footer.freeGuide': 'Free Guide',
      'footer.resources': 'Resources',
      
      // Footer - Learn
      'footer.learn': 'Learn',
      'footer.podcast': 'Podcast',
      'footer.articles': 'Articles',
      'footer.videos': 'Videos',
      
      // Footer - About
      'footer.about': 'About',
      'footer.thomasStory': "Thomas's Story",
      'footer.successStories': 'Success Stories',
      
      // Footer - Legal
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.cookies': 'Cookies',
      
      // Footer - Copyright
      'footer.copyright': 'Copyright © 2025',
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.learningHub': 'Centro de Aprendizaje',
      'nav.aboutThomas': 'Sobre Thomas',
      'nav.getGuide': 'Obtener la Guía Gratuita',
      
      // Footer - Quick Start
      'footer.quickStart': 'Inicio Rápido',
      'footer.quiz': 'Evaluación',
      'footer.freeGuide': 'Guía Gratuita',
      'footer.resources': 'Recursos',
      
      // Footer - Learn
      'footer.learn': 'Aprender',
      'footer.podcast': 'Podcast',
      'footer.articles': 'Artículos',
      'footer.videos': 'Videos',
      
      // Footer - About
      'footer.about': 'Acerca de',
      'footer.thomasStory': 'Historia de Thomas',
      'footer.successStories': 'Historias de Éxito',
      
      // Footer - Legal
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacidad',
      'footer.terms': 'Términos',
      'footer.cookies': 'Cookies',
      
      // Footer - Copyright
      'footer.copyright': 'Copyright © 2025',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;