import '../../style/molecules/Title.css';
import Line from '../atoms/Line';

type Props = {
  titre1: string,
  titre2: string
};

const Title = ({ titre1, titre2 }: Props) => {
  return (
    <div className='Title'>
      <div className='texte'>
        <h1 className='secondaire'>{titre1}</h1>
        <h1>{titre2}</h1>
      </div>
      <Line color={true}/>
    </div>
  );
};

export default Title;