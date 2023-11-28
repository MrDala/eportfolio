import '../../style/organisms/BlocCV.css';
import { downloadFile, openLink } from '../../tools/function';
import { rootIcons, rootPdf } from '../../tools/root';
import { CV } from '../Types';
import Button from '../atoms/Button';

const BlocCV = ({
  fichier: {
    nom,
    src
  },
  bouton: {
    telecharger,
    web
  }
}: CV) => {

  return (
    <div className='BlocCV'>
      <div>
        <img src={rootIcons + "cv.png"} alt={telecharger} />
        <Button className='plein' text={telecharger} onClick={() => downloadFile(rootPdf + src + ".pdf", nom)} />
      </div>
      <div className='separator'>
        <span />
        <h3>ou</h3>
        <span />
      </div>
      <div>
        <img src={rootIcons + "web.png"} alt={web} />
        <Button className='plein' text={web} onClick={() => openLink(rootPdf + src + ".pdf")} />
      </div>
    </div>
  );
};

export default BlocCV;
