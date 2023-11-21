import '../../style/IconButton.css';
import { IconButtonProps } from '../types';

const IconButton = ({
  className,
  name,
  openInNewTab,
  openOverlay,
  link
}: IconButtonProps) => {
  const root = "./ressources/icons/";

  const handleClick = () => {
    if (openInNewTab && link) {
      window.open(link, '_blank');
    }

    if (openOverlay) {
      // Ajoutez ici la logique pour afficher l'overlay
      console.log('Overlay ouvert !');
    }
  };

  return (
    <img
      className={"icon " + (className ? className : "")}
      src={root + name + '.png'}
      alt={name}
      onClick={handleClick}
    />
  );
};

export default IconButton;
