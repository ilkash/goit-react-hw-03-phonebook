import { Component } from 'react';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleOnSubmitAdd(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Name</h3>
        <input
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInput}
        />
        <h3>Number</h3>
        <input
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleInput}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
Form.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};