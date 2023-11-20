import '../../style/P.css';
import A from './A';

type Props = {
  children: string | React.ReactElement<typeof A>
};

const P = ({ children } : Props ) => {
  return (
    <p>
      {children}
    </p>
  );
};

export default P;