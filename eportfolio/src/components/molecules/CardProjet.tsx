import '../../style/molecules/CardProjet.css';
import { openLink } from '../../tools/function';
import { rootLogos } from '../../tools/root';
import { Projet } from '../Types';
import Button from '../atoms/Button';

const CardProjet = ({ name, date, description, urlGit, urlProjet, logos }: Projet) => {

  return (
    <div className='CardProjet'>
      <div className='col1'>
        <h3>{name}</h3>
        <p className='date'>{date}</p>
        <p className='description'>{description}</p>
        {urlGit && <Button text={urlGit.bouton} onClick={() => openLink(urlGit.url)} className='secondaire' />}
        {urlProjet && <Button text={urlProjet.bouton} onClick={() => openLink(urlProjet.url)} className='plein'/>}
      </div>
      <div className='col2'>
        {logos ? logos.map((logo, index) => (
          <img src={rootLogos + logo + ".png"} alt={"logo" + {index}} key={index} className='xs' />
        )) : null}
      </div>
    </div>
  );
};

export default CardProjet;
