import '../../style/BlocTextImage.css';

type Props = {
  name: string,
  children: string
  picture: string
};

const BlocTextImage = ({ name, children, picture }: Props) => {
  const root = "./ressources/images/";

  return (
    <div className='BlocTextImage' id={name}>
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

export default BlocTextImage;