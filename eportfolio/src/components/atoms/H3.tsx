import '../../style/H3.css';
import { TextProps } from '../Types';

const H3 = ({ className, children } : TextProps ) => {
  return (
    <h3 className={className}>
      {children}
    </h3>
  );
};

export default H3;
