import '../../style/CardExpPro.css';

type Props = {
  picture: string,
  poste: string,
  entreprise: string,
  date: string
};

const CardExpPro = ({ picture, poste, entreprise, date }: Props) => {
  const root = "./ressources/images/";

  return (
    <div className='CardExpPro'>
      <div className='col1'>
        <img className='' src={root + picture + ".png"} alt={picture} />
      </div>
      <div className='col2'>
        <div className='top'>
          <h4>{entreprise}</h4>
          <p>{date}</p>
        </div>
        <div className='bot'>
          <h3>{poste}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardExpPro;