import '../../style/atoms/IconButton.css';
import { rootIcons } from '../../tools/root';
import { IconButtonProps } from '../Types';

const IconButton = ({
  className,
  name,
  onClick,
}: IconButtonProps) => {

  return (
    <img
      className={"icon " + (className ? className : "")}
      src={rootIcons + name + '.png'}
      alt={name}
      onClick={onClick ? () => onClick() : undefined}
    />
  );
};

export default IconButton;
