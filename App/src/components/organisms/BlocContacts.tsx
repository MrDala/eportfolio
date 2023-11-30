import '../../style/organisms/BlocContact.css';
import { rootIcons } from '../../tools/root';
import { Contact } from '../Types';

type Props = {
  contacts: Contact[]
};

const BlocContact = ({ contacts }: Props) => {
  return (
    <div className="BlocContact">
      {contacts.map((contact, index) => (
        <div key={index}>
          <a href={contact.lien} target="_blank" rel="noreferrer">
            <img src={rootIcons + contact.icon + ".png"} alt={contact.icon} className='xs'/>
            <h3>{contact.lienAffiche}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlocContact;
