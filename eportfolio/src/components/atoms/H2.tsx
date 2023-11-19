import '../../style/H2.css';

type Props = {
  className?: string,
  children: string
};

const H2 = ({ className, children } : Props ) => {
  return (
    <h2 className={className}>{children}</h2>
  );
};

export default H2;
