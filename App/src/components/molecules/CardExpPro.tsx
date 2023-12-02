import { useState } from 'react';
import parse from 'html-react-parser';

import '../../style/molecules/CardExpPro.css';
import VoletExpPro from './VoletExpPro';
import { ExpPro } from '../Types';
import { rootLogos } from '../../tools/root';

const CardExpPro = ({ img, poste, entreprise, adresse, date, volet }: ExpPro) => {
  const [isOpen, setIsOpen] = useState(false);

  /* Volet experience pro */
  const toggleVolet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='CardExpPro' onClick={toggleVolet}>
        <div className='col1'>
          <img className='' src={rootLogos + img + ".png"} alt={img} />
        </div>
        <div className='col2'>
          <div className='top'>
            <h4>{entreprise}</h4>
            <p>{date}</p>
          </div>
          <div className='bot'>
            <h3>{poste}</h3>
          </div>
        </div>
      </div>
      {volet ?
        <VoletExpPro
          poste={poste}
          entreprise={entreprise}
          adresse={adresse}
          date={date}
          isOpen={isOpen}
          toggleVoletExpPro={toggleVolet}
        >
          {parse(volet)}
        </VoletExpPro> 
        : null
      }
    </>
  );
};

export default CardExpPro;