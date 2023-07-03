import PropTypes from 'prop-types';

export const Contacts = ({ visibleContacts, handelDelete }) => {
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => handelDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
Contacts.propTypes = {
  visibleContacts: PropTypes.func,
  handelDelete: PropTypes.func,
};