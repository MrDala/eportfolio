import '../../style/TextBigPicture.css';

type Props = {
  name: string,
  children: string
  picture: string
};

const TextBigPicture = ({ name, children, picture }: Props) => {
  const root = "./ressources/images/";

  return (
    <div className='TextBigPicture' id={name}>
      <h2 className='secondaire'>{name}</h2>
      <div className='content'>
        <div className='col1'>
          <p>{children}</p>
        </div>
        <div className='col2'>
          <img className='xl' src={root + picture + ".png"} alt={picture} />
        </div>
      </div>
    </div>
  );
};

export default TextBigPicture;