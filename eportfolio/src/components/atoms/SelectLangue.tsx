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
  
  return (
    <select onChange={handleLangueChange} defaultValue={defaultLangue}>
      {Object.entries(languesDispos).map((langue, index) => (
        <option key={index} value={langue[0]}>
          {langue[1]}
        </option>
      ))}
    </select>
  );
};

export default SelectLangue;
