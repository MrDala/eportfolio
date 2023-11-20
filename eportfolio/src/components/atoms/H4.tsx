import '../../style/H4.css';
import A from './A';

type Props = {
  children: string | React.ReactElement<typeof A>
};

const H4 = ({ children } : Props ) => {
  return (
    <h4>
      {children}
    </h4>
  );
};

export default H4;
