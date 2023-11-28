import '../../style/molecules/Projet.css';
import { openLink } from '../../tools/function';
import Button from '../atoms/Button';

type Props = {
  name: string,
  date: string,
  description: string,
  urlGit?: {
    bouton: string,
    url: string
  },
  urlProjet?: {
    bouton: string,
    url: string
  },
  logos?: string[]
};

const Projet = ({ name, date, description, urlGit, urlProjet, logos }: Props) => {
  const root = "./ressources/logos/";

  return (
    <div className='Projet'>
      <div className='col1'>
        <h3>{name}</h3>
        <p className='date'>{date}</p>
        <p className='description'>{description}</p>
        {urlGit && <Button text={urlGit.bouton} onClick={() => openLink(urlGit.url)} className='secondaire' />}
        {urlProjet && <Button text={urlProjet.bouton} onClick={() => openLink(urlProjet.url)} className='plein'/>}
      </div>
      <div className='col2'>
        {logos ? logos.map((logo, index) => (
          <img src={root + logo + ".png"} alt={"logo" + {index}} key={index} className='xs' />
        )) : null}
      </div>
    </div>
  );
};

export default Projet;
