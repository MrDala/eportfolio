import { useEffect, useRef } from 'react';

import '../../style/molecules/VoletMenu.css';
import IconButton from '../atoms/IconButton';
import { toggleVolet } from '../../tools/function';
import SelectLangue from '../atoms/SelectLangue';

type Props = {
  isOpen: boolean;
  toggleVoletMenu: () => void;
  titles: string[];
  langues: {
    languesDispos: Record<string, string>;
    onChange: Function;
    defaultLangue: string;
  };
};

const VoletMenu = ({ isOpen, toggleVoletMenu, titles, langues }: Props) => {
  // Fermeture automatique du volet en cas de clique en dehors du volet
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toggleVolet(isOpen, toggleVoletMenu, divRef);
  }, [isOpen, toggleVoletMenu]);

  return (
    <div ref={divRef} className={"VoletMenu " + (isOpen ? 'open' : '')}>
      <div className='top'>
        <SelectLangue 
          languesDispos={langues.languesDispos} 
          defaultLangue={langues.defaultLangue} 
          onChange={langues.onChange}      
        />
        <IconButton name='close' className='xs' onClick={toggleVoletMenu} />
      </div>


      <div className='categories'>
        {Array.isArray(titles) && titles.map((title, index) => (
          <h2 key={index}>
            <a href={"#" + title} onClick={toggleVoletMenu}>{title}</a>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default VoletMenu;
