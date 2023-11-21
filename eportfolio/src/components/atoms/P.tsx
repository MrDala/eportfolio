import '../../style/P.css';
import { TextProps } from '../types';

const P = ({ className, children } : TextProps ) => {
  return (
    <p className={className}>
      {children}
    </p>
  );
};

export default P;