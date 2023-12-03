import { ReactNode } from 'react';
import '../../style/organisms/Bloc.css';

type Props = {
  name: string;
  color?: boolean;
  children: ReactNode;
};

const Bloc = ({ name, color, children }: Props) => {
  const className = color ? 'Bloc secondaire' : 'Bloc'

  return (
    <div className={className} id={name}>
      <h2 className="secondaire">{name}</h2>
      <div className='content' >
        {children}
      </div>
    </div>
  );
};

export default Bloc;
