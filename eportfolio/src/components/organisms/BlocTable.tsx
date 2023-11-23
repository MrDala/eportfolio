import '../../style/BlocTable.css';
import Raw from '../molecules/Raw';

type Props = {
  name: string,
  heads: string[];
  children?: React.ReactElement<typeof Raw> | React.ReactElement<typeof Raw>[];
};

const BlocTable = ({ heads, name, children }: Props) => {
  return (
    <div className='BlocTable' id={name}>
      <h2 className='secondaire'>{name}</h2>
      <div className='content'>
        <table>
          <thead>
            <tr>
              {heads.map((head, index) => (
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
    </div>
  );
};

export default BlocTable;