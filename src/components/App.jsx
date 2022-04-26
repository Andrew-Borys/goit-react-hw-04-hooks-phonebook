import { Component } from 'react';
import Title from './Title';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import Message from './Message';

const LS_KEY = 'My_contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Will Smith', number: '127-19-32' },
      { id: 'id-6', name: 'Koza Dereza', number: '345-76-16' },
    ],
    filter: '',
  };

  contactId = () => nanoid();

  componentDidMount() {
    console.log('MOUNT');
    const localContacts = localStorage.getItem(LS_KEY);

    if (localContacts) {
      const local = JSON.parse(localContacts);
      this.setState({ contacts: local });
    }
  }

  componentDidUpdate(prevState) {
    console.log('UPDATE');

    const { contacts } = this.state;
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }

  handleSubmitFormData = data => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: this.contactId(),
            name: data.name,
            number: data.number,
          },
        ],
      };
    });
  };

  inputFilterContact = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getFilteredContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    // this.getFilteredContact();
    const { filter, contacts } = this.state;
    // console.log(this.getFilteredContact());

    return (
      <div>
        <Title text={'Phonebook'} />
        <ContactForm onSubmit={this.handleSubmitFormData} />
        <Title text={'Contacts'} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={this.getFilteredContact()}
            onDeleteContact={this.handleDeleteContact}
            filter={filter}
            onInputEntry={this.inputFilterContact}
          />
        ) : (
          <Message text={'Oooops, the contact list is empty ¯_(ツ) _/¯'} />
        )}
      </div>
    );
  }
}
