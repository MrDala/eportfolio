import '../../style/molecules/RawDiplome.css';
import { openLink } from '../../tools/function';
import { rootEntreprises } from '../../tools/root';
import { Diplome } from '../Types';
import Button from '../atoms/Button';
import ImageText from '../atoms/ImageText';

const RawDiplome = ({ nom, date, img, lien }: Diplome) => {
  return (
    <tr className='RawDiplome'>
      <td>
        <p className="big">{nom}</p>
      </td>
      <td>
        <p className="big">{date}</p>
      </td>
      <td>
        <ImageText className="xs" nameImage={rootEntreprises + img.src} text={img.texte} />
      </td>
      <td>
        <Button text="infos" className="xs" onClick={() => openLink(lien)} />
      </td>
    </tr>


  );
};

export default RawDiplome;
