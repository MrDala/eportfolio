import '../../style/organisms/BlocFooter.css';
import { Footer } from '../Types';
import Line from '../atoms/Line';

const BlocFooter = ({ texte }: Footer) => {
  return (
    <div className="BlocFooter">
      <Line color={true}/>
      <p>{texte}</p>
    </div>
  );
};

export default BlocFooter;
