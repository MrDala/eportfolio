import '../../style/Title.css';
import H1 from '../atoms/H1';
import Line from '../atoms/Line';

type Props = {
  titre1: string,
  titre2: string
};

const Title = ({ titre1, titre2 }: Props) => {
  return (
    <div className='Title'>
      <div className='texte'>
        <H1 className='secondaire'>{titre1}</H1>
        <H1>{titre2}</H1>
      </div>
      <Line className='color'/>
    </div>
  );
};

export default Title;