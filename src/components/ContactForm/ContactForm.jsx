import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function ContactForm({ onSubmit }) {
  const nameInputId = nanoid();
  const telInputId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    const contact = {
      name,
      number,
    };
    onSubmit(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      style={{
        margin: 'auto',
        border: '1px solid black',
        padding: '20px',
      }}
    >
      <label htmlFor={nameInputId} style={{ marginRight: '40px' }}>
        Enter name
        <input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={telInputId}>
        Tel number
        <input
          id={telInputId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

// nameInputId = nanoid();
// telInputId = nanoid();

// handleNameChange = event => {
//   const { name, value } = event.currentTarget;
//   this.setState({ [name]: value });
// };

// handleSubmitForm = event => {
//   event.preventDefault();

//   const contact = {
//     name: this.state.name,
//     number: this.state.number,
//   };

//   // console.log(contact);

//   this.props.onSubmit(contact);
//   this.reset();
// };

// reset = () => {
//   this.setState({
//     name: '',
//     number: '',
//   });
// };

//   render() {
//     return (
// <form
//   onSubmit={this.handleSubmitForm}
//   style={{
//     margin: 'auto',
//     border: '1px solid black',
//     padding: '20px',
//   }}
// >
//   <label htmlFor={this.nameInputId} style={{ marginRight: '40px' }}>
//     Enter name
//     <input
//       id={this.nameInputId}
//       type="text"
//       name="name"
//       value={this.state.name}
//       onChange={this.handleNameChange}
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//     />
//   </label>
//   <label htmlFor={this.telInputId}>
//     Tel number
//     <input
//       id={this.telInputId}
//       type="tel"
//       name="number"
//       value={this.state.number}
//       onChange={this.handleNameChange}
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//     />
//   </label>
//   <button type="submit">Add contact</button>
// </form>
//     );
//   }
// }

// export default ContactForm;
