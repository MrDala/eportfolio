import '../../style/organisms/Footer.css';
import Line from '../atoms/Line';

type Props = {
  text: string;
};

const Footer = ({ text }: Props) => {
  return (
    <div className="Footer">
      <Line color={true}/>
      <p>{text}</p>
    </div>
  );
};

export default Footer;
