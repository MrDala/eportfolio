import React, { useEffect, useRef } from 'react';

import '../../style/molecules/VoletMenu.css';
import IconButton from '../atoms/IconButton';

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
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && divRef.current && !divRef.current.contains(event.target as Node)) {
        toggleVoletMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleVoletMenu]);

  return (
    <div ref={divRef} className={"VoletMenu " + (isOpen ? 'open' : '')}>
      <IconButton name='close' className='xs' onClick={toggleVoletMenu} />
      {titles.map((title, index) => (
        <h2 key={index}>
          <a href={"#" + title} onClick={toggleVoletMenu}>{title}</a>
        </h2>
      ))}
    </div>
  );
};

export default VoletMenu;
