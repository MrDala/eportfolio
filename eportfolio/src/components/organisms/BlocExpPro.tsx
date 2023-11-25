import '../../style/organisms/BlocExpPro.css';

type Props = {
  name: string,
  children?: React.ReactNode | React.ReactNode[];
};

const BlocExpPro = ({ name, children }: Props) => {
  return (
    <div className='BlocExpPro' id={name}>
      {children}
    </div>
  );
};

export default BlocExpPro;