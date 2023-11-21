import '../../style/H1.css';
import { TextProps } from '../types';

const H1 = ({ className, children } : TextProps ) => {
  return (
    <h1 className={className ? className : ""}>
      {children}
    </h1>
  );
};

export default H1;
