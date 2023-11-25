import '../../style/organisms/Header.css';
import IconButton from '../atoms/IconButton';
import Title from '../molecules/Title';
import { IconButtonProps } from '../Types';

type Props = {
  icon1: IconButtonProps,
  icon2: IconButtonProps,
  icon3: IconButtonProps,

  titre1: string,
  titre2: string,
};

const Header = ({ icon1, icon2, icon3, titre1, titre2 }: Props) => {
  return (
    <div className='Header'>
      <div className='col1'>
        <IconButton name={icon1.name} className={icon1.className} onClick={icon1.onClick ?? (() => {})} />
        
      </div>

      <div className='col2'>
        <Title titre1={titre1} titre2={titre2} />
      </div>

      <div className='col3'>
      <IconButton name={icon2.name} className={icon2.className} onClick={icon2.onClick ?? (() => {})} />
      <IconButton name={icon3.name} className={icon3.className} onClick={icon3.onClick ?? (() => {})} />
      </div>
    </div>
  );
};

export default Header;