import { useEffect, useState } from 'react';

import '../../style/organisms/BlocProjet.css';
import Projet from '../molecules/Projet';
import { applyLastRow } from '../../tools/function';

type Props = {
  name: string,
  children?: React.ReactElement<typeof Projet> | React.ReactElement<typeof Projet>[];
};

const BlocProjet = ({ name, children }: Props) => {
  const [elementPerRow, setElementsPerRow] = useState(0);

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
    const projetContainer = document.getElementById(name);

    if (projetContainer) {
      applyLastRow(projetContainer, '.Projet', elementPerRow);
    }
  }, [elementPerRow, name]);

  return (
    <div className='BlocProjet' id={name}>
      {children}
    </div>
  );
};

export default BlocProjet;
