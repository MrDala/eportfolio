import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language files
import fr from '../traduction/FR_fr.json';
import en from '../traduction/EN_en.json';

// Define resources with translations
const resources = { fr, en };

// Initialize i18n with necessary parameters
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    defaultNS: 'react',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
