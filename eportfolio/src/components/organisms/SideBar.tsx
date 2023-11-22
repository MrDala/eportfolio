import React, { useEffect, useRef } from 'react';
import '../../style/SideBar.css';
import IconButton from '../atoms/IconButton';

type Props = {
  isOpen: boolean;
  toggleSideBar: () => void;
  children?: React.ReactNode | React.ReactNode[];
};

const SideBar = ({ isOpen, toggleSideBar, children }: Props) => {
  //Fermeture automatique du volet en cas de clique en dehors du volet
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && divRef.current && !divRef.current.contains(event.target as Node)) {
        toggleSideBar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSideBar]);

  return (
    <div ref={divRef} className={"SideBar " + (isOpen ? 'open' : '')}>
      <IconButton name='close' className='xs' onClick={toggleSideBar} />
      {children}
    </div>
  );
};

export default SideBar;
