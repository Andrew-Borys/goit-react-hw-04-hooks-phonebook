import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const Filter = ({ filter, onInputEntry }) => {
  const filterInputId = nanoid();

  return (
    <label htmlFor={filterInputId}>
      Find contacts by name
      <input
        id={filterInputId}
        type="text"
        value={filter}
        onChange={onInputEntry}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onInputEntry: PropTypes.func,
};

export default Filter;
