import '../../style/organisms/BlocExpPro.css';
import CardExpPro from '../molecules/CardExpPro';

type Props = {
  name: string,
  children?: React.ReactElement<typeof CardExpPro> | React.ReactElement<typeof CardExpPro>[];
};

const BlocExpPro = ({ name, children }: Props) => {
  return (
    <div className='BlocExpPro' id={name}>
      {children}
    </div>
  );
};

export default BlocExpPro;