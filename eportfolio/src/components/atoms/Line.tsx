import '../../style/atoms/Line.css';

type Props = {
  className?: string;
};

const Line = ({ className }: Props) => {
  return (
    <div className={"line " + (className ? className : "")} />
  );
};

export default Line;
