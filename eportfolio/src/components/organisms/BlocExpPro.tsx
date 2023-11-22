import '../../style/BlocExpPro.css';

type Props = {
  name: string,
  children?: React.ReactNode | React.ReactNode[];
};

const BlocExpPro = ({ name, children }: Props) => {
  return (
    <div className='BlocExpPro' id={name}>
      <h2 className='secondaire'>{name}</h2>
      <div className='content'>
        {children}
      </div>
    </div>
  );
};

export default BlocExpPro;