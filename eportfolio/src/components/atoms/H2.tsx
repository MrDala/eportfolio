import '../../style/H2.css';
import { TextProps } from '../Types';

const H2 = ({ className, children } : TextProps ) => {
  return (
    <h2 className={className ? className : ""}>
      {children}
    </h2>
  );
};

export default H2;
