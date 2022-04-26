import ContactItem from '../ContactItem';
import Message from 'components/Message';
import Filter from '../Filter';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact, filter, onInputEntry }) => {
  return (
    <>
      <Filter filter={filter} onInputEntry={onInputEntry} />
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteContact={onDeleteContact}
            />
          ))}
        </ul>
      ) : (
        <Message text={'The contact was not found o_O'} />
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
  filter: PropTypes.string,
  onInputEntry: PropTypes.func,
};

export default ContactList;
