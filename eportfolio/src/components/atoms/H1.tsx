import '../../style/H1.css';

type Props = {
  className?: string,
  children: string
};

const H1 = ({ className, children } : Props ) => {
  return (
    <h1 className={className ? className : ""}>{children}</h1>
  );
};

export default H1;
