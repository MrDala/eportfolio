import '../../style/molecules/RawDiplome.css';
import { openLink } from '../../tools/function';
import Button from '../atoms/Button';
import ImageText from '../atoms/ImageText';

type Props = {
  nom: string,
  date: string,
  img: {
    src: string,
    texte: string
  },
  lien: string
};

const RawDiplome = ({ nom, date, img, lien }: Props) => {
  return (
    <tr className='RawDiplome'>
      <td>
        <p className="big">{nom}</p>,
      </td>
      <td>
        <p className="big">{date}</p>,
      </td>
      <td>
        <ImageText className="xs" nameImage={img.src} text={img.texte} />,
      </td>
      <td>
        <Button text="infos" className="xs" onClick={() => openLink(lien)} />
      </td>
    </tr>


  );
};

export default RawDiplome;
