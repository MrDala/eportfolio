import React, { createRef, useEffect, useState } from 'react';

import '../../style/organisms/BlocProjet.css';
import Projet from '../molecules/CardProjet';
import { applyLastRow } from '../../tools/function';

type Props = {
  children?: React.ReactElement<typeof Projet> | React.ReactElement<typeof Projet>[];
};

const BlocProjet = ({ children }: Props) => {
  const [elementPerRow, setElementsPerRow] = useState(0);
  const projetContainer = createRef<HTMLDivElement>(); 
  
  const calculateElementsPerRow = () => {
    if (window.innerWidth < 641) {
      setElementsPerRow(1);
    } else if (window.innerWidth >= 641 && window.innerWidth < 1008) {
      setElementsPerRow(2);
    } else if (window.innerWidth >= 1008 && window.innerWidth < 1400) {
      setElementsPerRow(3);
    } else {
      setElementsPerRow(4);
    }
  };

  useEffect(() => {
    calculateElementsPerRow();

    const handleResize = () => {
      calculateElementsPerRow();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (projetContainer.current) {
      applyLastRow(projetContainer.current, '.CardProjet', elementPerRow);
    }
  }, [elementPerRow, projetContainer]);

  return (
    <div className='BlocProjet' ref={projetContainer}>
      {children}
    </div>
  );
};

export default BlocProjet;
