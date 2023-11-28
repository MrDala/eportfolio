import '../../style/organisms/BlocExpPro.css';
import CardExpPro from '../molecules/CardExpPro';

type Props = {
  name: string,
  children?: React.ReactElement<typeof CardExpPro> | React.ReactElement<typeof CardExpPro>[];
};

const BlocExpPro = ({ children }: Props) => {
  return (
    <div className='BlocExpPro'>
      {children}
    </div>
  );
};

export default BlocExpPro;