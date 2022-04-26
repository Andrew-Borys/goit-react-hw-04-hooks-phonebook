import PropTypes from 'prop-types';

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
  deleteContact: PropTypes.func,
};

export default ContactItem;
