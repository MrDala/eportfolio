import '../../style/H3.css';

type Props = {
  children: string
};

const H3 = ({ children } : Props ) => {
  return (
    <h3>{children}</h3>
  );
};

export default H3;
