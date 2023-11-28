import '../../style/organisms/BlocTable.css';
import RawDiplome from '../molecules/RawDiplome';

type Props = {
  name: string,
  heads: string[];
  children?: React.ReactElement<typeof RawDiplome> | React.ReactElement<typeof RawDiplome>[];
};

const BlocTable = ({ heads, name, children }: Props) => {
  return (
    <div className='BlocTable' id={name}>
      <table>
        <thead>
          <tr>
            {Array.isArray(heads) && heads.map((head, index) => (
              <th key={index}>
                <h3>
                  {head}
                </h3>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default BlocTable;