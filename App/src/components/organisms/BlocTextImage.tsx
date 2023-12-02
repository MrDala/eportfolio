import parse from 'html-react-parser';

import { rootImages } from '../../tools/root';
import { Presentation } from '../Types';

import '../../style/organisms/BlocTextImage.css';


const BlocTextImage = ({ texte, img }: Presentation) => {
  return (
    <div className='BlocTextImage'>
      <div className='col1'>
        {parse(texte)}
      </div>
      <div className='col2'>
        <img className='xl' src={rootImages + img + ".png"} alt={img} />
      </div>
    </div>
  );
};

export default BlocTextImage;