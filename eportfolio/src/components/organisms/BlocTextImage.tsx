import '../../style/organisms/BlocTextImage.css';

type Props = {
  name: string,
  text: string
  picture: string
};

const BlocTextImage = ({ name, text, picture }: Props) => {
  const root = "./ressources/images/";

  return (
    <div className='BlocTextImage' id={name}>
      <div className='col1'>
        <p>{text}</p>
      </div>
      <div className='col2'>
        <img className='xl' src={root + picture + ".png"} alt={picture} />
      </div>
    </div>
  );
};

export default BlocTextImage;