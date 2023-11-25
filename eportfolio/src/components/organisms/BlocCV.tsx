import '../../style/organisms/BlocCV.css';
import { downloadFile, openLink } from '../../tools/function';
import Button from '../atoms/Button';

type Props = {
  name: string,
  cv: string
};

const BlocCV = ({ name, cv }: Props) => {
  const root = "./ressources/icons/";
  const cvRoot = "ressources/pdf/"

  return (
    <div className='BlocCV' id={name}>
      <div>
        <img src={root + "cv.png"} alt='Télécharger le CV'/>
        <Button className='plein' text='Télécharger le CV' onClick={() => downloadFile(cvRoot + cv + ".pdf")}/>
      </div>
      <div className='separator'>
        <span/>
        <h3>ou</h3>
        <span/>
      </div>
      <div>
      <img src={root + "web.png"} alt='Consulter en ligne'/>
        <Button className='plein' text='Consulter en ligne' onClick={() => openLink(cvRoot + cv + ".pdf")}/>
      </div>
    </div>
  );
};

export default BlocCV;
