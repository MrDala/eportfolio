import '../../style/organisms/BlocTextImage.css';
import { rootImages } from '../../tools/root';
import { Presentation } from '../Types';

const BlocTextImage = ({ texte, img }: Presentation) => {
  return (
    <div className='BlocTextImage'>
      <div className='col1'>
        <p>{texte}</p>
      </div>
      <div className='col2'>
        <img className='xl' src={rootImages + img + ".png"} alt={img} />
      </div>
    </div>
  );
};

export default BlocTextImage;