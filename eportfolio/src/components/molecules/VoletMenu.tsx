import React, { useEffect, useRef } from 'react';

import '../../style/molecules/VoletMenu.css';
import IconButton from '../atoms/IconButton';
import { toggleVolet } from '../../tools/function';

type Props = {
  isOpen: boolean;
  toggleVoletMenu: () => void;
  titles: string[];
  children?: React.ReactNode | React.ReactNode[];
};

const VoletMenu = ({ isOpen, toggleVoletMenu, titles }: Props) => {
  //Fermeture automatique du volet en cas de clique en dehors du volet
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toggleVolet(isOpen, toggleVoletMenu, divRef);
  }, [isOpen, toggleVoletMenu]);

  return (
    <div ref={divRef} className={"VoletMenu " + (isOpen ? 'open' : '')}>
      <IconButton name='close' className='xs' onClick={toggleVoletMenu} />
      {Array.isArray(titles) && titles.map((title, index) => (
        <h2 key={index}>
          <a href={"#" + title} onClick={toggleVoletMenu}>{title}</a>
        </h2>
      ))}
    </div>
  );
};

export default VoletMenu;
