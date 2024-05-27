// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          homepage: {
            title: 'Welcome to my website!',
            description: 'This is the homepage.'
          }
          // Add more translations for other components/pages as needed
        }
      },
      es: {
        translation: {
          homepage: {
            title: '¡Bienvenido a mi sitio web!',
            description: 'Esta es la página de inicio.'
          }
          // Add more translations for other components/pages as needed
        }
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false // React already escapes values by default
    }
  });

export default i18n;
