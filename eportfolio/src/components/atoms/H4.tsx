import '../../style/H4.css';
import { TextProps } from '../types';

const H4 = ({ className, children } : TextProps ) => {
  return (
    <h4 className={className}>
      {children}
    </h4>
  );
};

export default H4;
