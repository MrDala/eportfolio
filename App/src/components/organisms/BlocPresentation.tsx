import parse from 'html-react-parser';

import { rootImages } from '../../tools/root';
import { Presentation } from '../Types';

import '../../style/organisms/BlocPresentation.css';


const BlocPresentation = ({ texte, img }: Presentation) => {
  return (
    <div className='BlocPresentation'>
      <div className='col1'>
        {parse(texte)}
      </div>
      {img ?
        <div className='col2'>
          <img className='xl' src={rootImages + img + ".png"} alt={img} />
        </div>
        : null
      }
    </div>
  );
};

export default BlocPresentation;