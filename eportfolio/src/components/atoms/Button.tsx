import '../../style/atoms/Button.css';

type Props = {
  className?: string,
  text: string
  onClick?: Function
};

const Button = ({ className, text, onClick } : Props ) => {
  return (
    <button 
    className={className ? className : undefined}
    onClick={onClick ? () => onClick() : undefined}
    >
      {text}
    </button>
  );
};

export default Button;
