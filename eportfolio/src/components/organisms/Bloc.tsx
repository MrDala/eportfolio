import '../../style/organisms/Bloc.css';
import BlocExpPro from './BlocExpPro';
import BlocProjet from './BlocProjet';
import BlocTable from './BlocTable';
import BlocTextImage from './BlocTextImage';

type Props = {
  name: string;
  color?: boolean;
  children: 
    React.ReactElement<typeof BlocExpPro> | 
    React.ReactElement<typeof BlocProjet> | 
    React.ReactElement<typeof BlocTextImage> |
    React.ReactElement<typeof BlocTable> ;
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
