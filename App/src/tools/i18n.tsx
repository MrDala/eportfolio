import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import dynamique des différents fichiers de traduction
const langueParDefaut = process.env.REACT_APP_LANGUE_DEFAUT ?? "en-US";
const translations = require.context('../traduction', false, /\.json$/);
const keys: string [] = translations.keys();
const regexToutesLettres: RegExp = /(?<=\.\/).+?(?=\.json)/;

let langueNavigateur = navigator.language;
switch (langueNavigateur) {
  case 'fr':
    langueNavigateur = 'fr-FR';
    break;
  case 'en':
    langueNavigateur = 'en-US';
    break;
}

// Définition de la liste de langues disponibles
export const langues : Record<string, string> = Object.fromEntries(
  keys
    .reduce((acc, key) => {
      const toutesLettres = key.match(regexToutesLettres)?.[0] ?? null;

      if (toutesLettres != null && toutesLettres) {
        acc.push([toutesLettres, toutesLettres]);
      }
      return acc;
    }, [] as [string, string][])
    .sort(([a], [b]) => a.localeCompare(b))
);

export const defaultLangue = 
  Object.keys(langues).includes(langueNavigateur) 
  ? langueNavigateur 
  : langueParDefaut;

// Lecture des fichiers de traduction chargés
const resources: Record<string, any> = {};
translations.keys().forEach(key => {
  const langKey = key.replace('./', '').replace('.json', '');
  resources[langKey] = translations(key);
});

// Initialisation des paramètres i18n
i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    fallbackLng: langueNavigateur,
    debug: false,
    defaultNS: 'react',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
