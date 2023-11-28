import '../../style/atoms/ImageText.css';

type Props = {
  className: string,
  nameImage: string,
  text: string,
}
const ImageText = ({ className, nameImage, text }: Props) => {

  return (
    <span className="ImageText">
      <img
        className={(className ? className : "")}
        src={nameImage + '.png'}
        alt={nameImage}
      />
      <p className='big'>{text}</p>
    </span>
  );
};

export default ImageText;
