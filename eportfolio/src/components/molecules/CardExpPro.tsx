import { useState } from 'react';
import '../../style/molecules/CardExpPro.css';
import VoletExpPro from './VoletExpPro';

type Props = {
  picture: string,
  poste: string,
  entreprise: string,
  adresse?: string,
  date: string,
  children?: React.ReactNode | React.ReactNode[];
};


const CardExpPro = ({ picture, poste, entreprise, adresse, date, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  /* Volet experience pro */
  const toggleVolet = () => {
    setIsOpen(!isOpen);
  };
  
  const root = "./ressources/images/";

  return (
    <>
      <div className='CardExpPro' onClick={toggleVolet}>
        <div className='col1'>
          <img className='' src={root + picture + ".png"} alt={picture} />
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
      <VoletExpPro 
        poste={poste} 
        entreprise={entreprise} 
        adresse={adresse} 
        date={date}
        isOpen={isOpen}
        toggleVoletExpPro={toggleVolet}
      >
        {children}
      </VoletExpPro>
    </>
  );
};

export default CardExpPro;