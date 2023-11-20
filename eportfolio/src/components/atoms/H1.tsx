import '../../style/H1.css';
import A from './A';

type Props = {
  className?: string,
  children: string | React.ReactElement<typeof A>
};

const H1 = ({ className, children } : Props ) => {
  return (
    <h1 className={className ? className : ""}>
      {children}
    </h1>
  );
};

export default H1;
