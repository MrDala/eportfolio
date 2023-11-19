import '../../style/H4.css';

type Props = {
  children: string
};

const H4 = ({ children } : Props ) => {
  return (
    <h4>{children}</h4>
  );
};

export default H4;
