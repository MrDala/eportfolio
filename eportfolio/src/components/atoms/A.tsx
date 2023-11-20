import '../../style/A.css';

type Props = {
  children: string,
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