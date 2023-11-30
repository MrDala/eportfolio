import parse from 'html-react-parser';

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
        <h1 className='secondaire'>{parse(titre1)}</h1>
        <h2>{parse(titre2)}</h2>
      </div>
      <Line color={true}/>
    </div>
  );
};

export default Title;