import React from 'react';
import '../../style/SideBar.css';
import IconButton from '../atoms/IconButton';

type Props = {
  isOpen: boolean;
  toggleSideBar: () => void;
  children?: React.ReactNode | React.ReactNode[];
};

const SideBar = ({ isOpen, toggleSideBar, children }: Props) => {
  return (
    <div className={"SideBar " + (isOpen ? 'open' : '')}>
      <IconButton name='close' className='xs' onClick={toggleSideBar} />
      {children}
    </div>
  );
};

export default SideBar;
