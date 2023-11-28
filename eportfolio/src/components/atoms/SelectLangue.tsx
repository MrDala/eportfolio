import { useEffect } from 'react';
import '../../style/atoms/SelectLangue.css';

type Props = {
  languesDispos: string[],
  onChange: Function
};

const SelectLangue = ({ languesDispos, onChange }: Props) => {
  const handleLangueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nouvelleLangue = e.target.value;
    onChange(nouvelleLangue);
  };

  useEffect(() => {
    console.log("changement langues dispos");
  }, [languesDispos])

  useEffect(() => {
    console.log("changement onChange");
  }, [onChange])

  useEffect(() => {
    // Fonction pour obtenir la langue du navigateur
    const getBrowserLangue = (): string => {
      const navLangue = navigator.language;
      return navLangue.split('-')[1];
    };

    // Définir la langue par défaut sur celle du navigateur ou sur l'anglais
    const langueParDefaut = languesDispos.includes(getBrowserLangue())
      ? getBrowserLangue()
      : 'EN';
    
    onChange(langueParDefaut);
  }, [languesDispos, onChange]);

  return (
    <select onChange={handleLangueChange}>
      {(Array.isArray(languesDispos) ? languesDispos : []).map((langue, index) => (
        <option key={index} value={langue}>
          {langue}
        </option>
      ))}
    </select>
  );
};

export default SelectLangue;
