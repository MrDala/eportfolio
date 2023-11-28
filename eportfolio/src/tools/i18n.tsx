import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language files
import { Langues } from '../tools/langues';
const translations = require.context('../traduction', false, /\.json$/);

const resources: Record<Langues, any> = {} as Record<Langues, any>;

// Load each translation file dynamically
translations.keys().forEach(key => {
  const langKey = key.replace('./', '').replace('.json', '') as Langues;
  resources[langKey] = translations(key);
});

// Initialize i18n with necessary parameters
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Langues.FR,
    fallbackLng: Langues.FR,
    debug: false,
    defaultNS: 'react',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;