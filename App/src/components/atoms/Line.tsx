import '../../style/atoms/Line.css';

type Props = {
  color?: boolean;
};

const Line = ({ color }: Props) => {
  const className = color ? "line color" : "line";

  return (
    <div className={className} />
  );
};

export default Line;
