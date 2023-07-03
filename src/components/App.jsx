import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacs';

const LOCAL_STORAGE_CONTACTS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_CONTACTS_KEY)
    );
    if (contacts) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(
        LOCAL_STORAGE_CONTACTS_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }
  filterContacts = () => {
    const filter = this.state.filter;
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFilter = event => {
    const { value } = event.target;
    this.setState({
      filter: value,
    });
  };
  handleOnSubmitAdd = contact => {
    const isExist = this.state.contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${contact.name} already exists`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
    }));
  };
  handelDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const visibleContacts = this.filterContacts();

    return (
      <div>
        <h3>Phonebook</h3>
        <Form
          handleInput={this.handleInput}
          handleOnSubmitAdd={this.handleOnSubmitAdd}
        />

        <h3>Contacts</h3>
        <h4>Find contacts by name</h4>

        <Filter handleFilter={this.handleFilter} filter={this.state.filter} />

        <Contacts
          visibleContacts={visibleContacts}
          handelDelete={this.handelDelete}
        />
      </div>
    );
  }
}