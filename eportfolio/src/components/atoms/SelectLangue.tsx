import '../../style/atoms/SelectLangue.css';

type Props = {
  languesDispos: string[],
  defaultLangue: string,
  onChange: Function
};

const SelectLangue = ({ languesDispos, onChange, defaultLangue }: Props) => {
  const handleLangueChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const nouvelleLangue = e.target.value;
    onChange(nouvelleLangue);
  };

  return (
    <select onChange={handleLangueChange} defaultValue={defaultLangue}>
      {(Array.isArray(languesDispos) ? languesDispos : []).map((langue, index) => (
        <option key={index} value={langue}>
          {langue}
        </option>
      ))}
    </select>
  );
};

export default SelectLangue;
