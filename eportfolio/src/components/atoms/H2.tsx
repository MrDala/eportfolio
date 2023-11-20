import '../../style/H2.css';
import A from './A';

type Props = {
  className?: string,
  children: string | React.ReactElement<typeof A>
};

const H2 = ({ className, children } : Props ) => {
  return (
    <h2 className={className ? className : ""}>
      {children}
    </h2>
  );
};

export default H2;
