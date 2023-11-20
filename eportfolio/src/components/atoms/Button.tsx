import '../../style/Button.css';

type Props = {
  className?: string,
  children: string
};

const Button = ({ className, children } : Props ) => {
  return (
    <button className={className ? className : ""}>
      {children}
    </button>
  );
};

export default Button;
