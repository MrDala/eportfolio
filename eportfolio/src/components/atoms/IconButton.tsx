import '../../style/IconButton.css';
import { IconButtonProps } from '../Types';

const IconButton = ({
  className,
  name,
  onClick,
}: IconButtonProps) => {
  const root = "./ressources/icons/";

  return (
    <img
      className={"icon " + (className ? className : "")}
      src={root + name + '.png'}
      alt={name}
      onClick={onClick ? () => onClick() : undefined}
    />
  );
};

export default IconButton;
