import '../../style/IconButton.css';

type Props = {
  className?: string,
  name: string;
};

const IconButton = ({ className, name }: Props) => {
  const root = "./ressources/icons/";

  return (
    <img src={root + name + '.png'} alt={name} />
  );
};

export default IconButton;
