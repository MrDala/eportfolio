import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importez les fichiers de traduction
import fr from '../traduction/FR_fr.json';
import en from '../traduction/EN_en.json';

// Définissez les ressources avec les traductions
const resources = { fr, en };

// Initialisez i18n avec les paramètres nécessaires
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    defaultNS: 'react',
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
