import { useState, useEffect } from 'react';
import Title from './Title';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import Message from './Message';

const LS_KEY = 'My_contacts';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem(LS_KEY)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        { id: 'id-5', name: 'Will Smith', number: '127-19-32' },
        { id: 'id-6', name: 'Koza Dereza', number: '345-76-16' },
      ] ??
      ''
    );
  });
  const [filter, setFilter] = useState('');

  const contactId = () => nanoid();

  useEffect(() => {
    // console.log('set item LS');
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitFormData = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevState => [
      ...prevState,
      {
        id: contactId(),
        name: name,
        number: number,
      },
    ]);
  };

  const inputFilterContact = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div>
      <Title text={'Phonebook'} />
      <ContactForm onSubmit={handleSubmitFormData} />
      <Title text={'Contacts'} />
      {contacts.length > 0 ? (
        <ContactList
          contacts={getFilteredContact()}
          onDeleteContact={handleDeleteContact}
          filter={filter}
          onInputEntry={inputFilterContact}
        />
      ) : (
        <Message text={'Oooops, the contact list is empty ¯_(ツ) _/¯'} />
      )}
    </div>
  );
}
