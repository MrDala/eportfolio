import '../../style/IconButton.css';

type Props = {
  className?: string,
  name: string;
};

const IconButton = ({ className, name }: Props) => {
  const root = "./ressources/icons/";

  return (
    <img className={"icon " + (className ? className : "")} src={root + name + '.png'} alt={name} />
  );
};

export default IconButton;
