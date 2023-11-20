import '../../style/H3.css';
import A from './A';

type Props = {
  children: string | React.ReactElement<typeof A>
};

const H3 = ({ children } : Props ) => {
  return (
    <h3>
      {children}
    </h3>
  );
};

export default H3;
