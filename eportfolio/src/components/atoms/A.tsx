import '../../style/A.css';

type Props = {
  children: JSX.Element,
  href: string
};

const A = ({ children, href }: Props) => {
  return (
    <a href={href}>
      {children}
    </a>
  );
};

export default A;