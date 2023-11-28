import '../../style/organisms/BlocCV.css';
import { downloadFile, openLink } from '../../tools/function';
import Button from '../atoms/Button';

type Props = {
  name: string,
  cv: string,
  telecharger: string,
  web: string
};

const BlocCV = ({ name, cv, telecharger, web }: Props) => {
  const root = "./ressources/icons/";
  const cvRoot = "ressources/pdf/"

  return (
    <div className='BlocCV' id={name}>
      <div>
        <img src={root + "cv.png"} alt={telecharger}/>
        <Button className='plein' text={telecharger} onClick={() => downloadFile(cvRoot + cv + ".pdf")}/>
      </div>
      <div className='separator'>
        <span/>
        <h3>ou</h3>
        <span/>
      </div>
      <div>
      <img src={root + "web.png"} alt={web}/>
        <Button className='plein' text={web} onClick={() => openLink(cvRoot + cv + ".pdf")}/>
      </div>
    </div>
  );
};

export default BlocCV;
