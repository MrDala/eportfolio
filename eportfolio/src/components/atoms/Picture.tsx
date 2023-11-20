import '../../style/Picture.css';

type Props = {
  className?: string,
  name: string;
};

const Picture = ({ className, name }: Props) => {
  const root = "./ressources/images/";

  return (
    <img className={className ? className : ""} src={root + name + '.png'} alt={name} />
  );
};

export default Picture;
