import '../../style/atoms/ImageText.css';

type Props = {
  className: string,
  nameImage: string,
  text: string,
}
const ImageText = ({ className, nameImage, text }: Props) => {
  const root = "./ressources/logos/";

  return (
    <span className="ImageText">
      <img
        className={(className ? className : "")}
        src={root + nameImage + '.png'}
        alt={nameImage}
      />
      <p className='big'>{text}</p>
    </span>
  );
};

export default ImageText;
