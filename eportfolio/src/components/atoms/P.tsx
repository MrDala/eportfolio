import '../../style/P.css';

type Props = {
  children: string
};

const P = ({ children } : Props ) => {
  return (
    <p>{children}</p>
  );
};

export default P;