import '../../style/organisms/BlocContact.css';

type Props = {
  name: string;
  contacts: {
    icon: string,
    lien: string
    lienAffiche: string
  }[]
};

const BlocContact = ({ name, contacts }: Props) => {
  const root = "./ressources/icons/";

  return (
    <div className="BlocContact" id={name}>
      {contacts.map((contact, index) => (
        <div key={index}>
          <a href={contact.lien} target="_blank" rel="noreferrer">
            <img src={root + contact.icon + ".png"} alt={contact.icon} className='xs'/>
            <h3>{contact.lienAffiche}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlocContact;
