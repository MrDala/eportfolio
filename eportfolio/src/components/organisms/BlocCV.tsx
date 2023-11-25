import '../../style/organisms/BlocCV.css';

type Props = {
  name: string,
  cv: string
};

const BlocCV = ({ name, cv }: Props) => {
  
  return (
    <div className='BlocCV' id={name}>
      <h2 className='secondaire'>{name}</h2>
      <div className='content' >

      </div>
    </div>
  );
};

export default BlocCV;
