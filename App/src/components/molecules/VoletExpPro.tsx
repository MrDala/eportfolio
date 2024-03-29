import { useEffect, useRef } from 'react';

import '../../style/molecules/VoletExpPro.css';
import IconButton from '../atoms/IconButton';
import { toggleVolet } from '../../tools/function';

type Props = {
  poste: string,
  entreprise: string,
  adresse?: string,
  date: string,
  isOpen: boolean,
  toggleVoletExpPro: () => void,
  children?: React.ReactNode | React.ReactNode[];
};

const VoletExpPro = ({ poste, entreprise, adresse, date, isOpen, toggleVoletExpPro, children }: Props) => {
  //Fermeture automatique du volet en cas de clique en dehors du volet
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toggleVolet(isOpen, toggleVoletExpPro, divRef);
  }, [isOpen, toggleVoletExpPro]);

  return (
    <div ref={divRef} className={"VoletExpPro " + (isOpen ? 'open' : '')}>
      <IconButton name='close' className='xs' onClick={toggleVoletExpPro} />
      <div className='textZone'>
        <div className='head'>
          <div className="col1">
            <h2>{poste}</h2>
          </div>

          <div className="col2">
            <h3>{entreprise}</h3>
            <p>{adresse}</p>
            <p>{date}</p>
          </div>
        </div>

        <div className='description'>
          {children}
        </div>
      </div>

    </div>
  );
};

export default VoletExpPro;