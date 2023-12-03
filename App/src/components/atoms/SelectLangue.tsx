import '../../style/atoms/SelectLangue.css';

type Props = {
  languesDispos: Record<string, string>,
  defaultLangue: string,
  onChange: Function
};

const SelectLangue = ({ languesDispos, onChange, defaultLangue }: Props) => {
  const handleLangueChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const nouvelleLangue = e.target.value;
    onChange(nouvelleLangue);
  };

  // Utilisez l'API Unicode pour obtenir les drapeaux
  function getFlagEmoji(countryCode: string | null): string | void {
    if (!countryCode) {
      return;
    }

    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));

    return String.fromCodePoint(...codePoints);
  }

  const regexLangue = /^(.*)-/ //Deux premières lettres
  const regexPays = /-(.+)/  //Deux dernières lettres

  function createOption(index: number, langueCode: string): JSX.Element | undefined {
    const flag = getFlagEmoji(langueCode.match(regexPays)?.[1] ?? null);
    const langue = langueCode.match(regexLangue)?.[1]?.toUpperCase() ?? null;

    if (langue) {
      return (
        <option key={index} value={langueCode}>
          {flag + " " + langue}
        </option>
      );
    } else {
      return undefined;
    }
  }

  return (
    <div className='SelectLangue'>
      <select onChange={handleLangueChange} defaultValue={defaultLangue} >
        {Object.entries(languesDispos).map(([langueCode, langueName], index) => (
          createOption(index, langueCode)
        ))}
      </select>
    </div>

  );
};

export default SelectLangue;
