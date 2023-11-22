import '../../style/CardExpPro.css';
import VoletExpPro from './VoletExpPro';

type Props = {
  picture: string,
  poste: string,
  entreprise: string,
  adresse?: string,
  date: string,
  isOpen: boolean,
  toggleVoletExpPro: () => void,
  children?: React.ReactNode | React.ReactNode[];
};

const CardExpPro = ({ picture, poste, entreprise, adresse, date, isOpen, toggleVoletExpPro, children }: Props) => {
  const root = "./ressources/images/";

  return (
    <>
      <div className='CardExpPro' onClick={toggleVoletExpPro}>
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
      <VoletExpPro 
        poste={poste} 
        entreprise={entreprise} 
        adresse={adresse} 
        date={date}
        isOpen={isOpen}
        toggleVoletExpPro={toggleVoletExpPro}
      >
        {children}
      </VoletExpPro>
    </>
  );
};

export default CardExpPro;