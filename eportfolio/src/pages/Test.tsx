import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import '../tools/i18n';

type Props = {
  lang: 'en' | 'fr';
}

const Test = ({ lang }: Props) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div>
      {t('presentation.title')}
    </div>
  );
};


export default Test;
