import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localStorageContacts = localStorage.getItem('contacts');
    if (!localStorageContacts) return;

    this.setState({ contacts: JSON.parse(localStorageContacts) });
  }

  componentDidUpdate(prevProps, prevState) {
    const oldContacts = prevState.contacts;
    const newContacts = this.state.contacts;
    if (oldContacts !== newContacts) {
      localStorage.setItem('contacts', JSON.stringify(newContacts));
    }
  }

  addContact = e => {
    e.preventDefault();
    const nameInput = e.target.elements.name;
    const numberInput = e.target.elements.number;
    const nameSameness = this.state.contacts.find(
      contact => contact.name === nameInput.value
    );

    if (nameSameness) {
      Notify.info(`${nameInput.value} is already in contacts`);
      return;
    } else {
      const contact = [
        {
          name: nameInput.value,
          number: numberInput.value,
          id: nanoid(),
        },
      ];
      this.setState(state => {
        return { contacts: [...state.contacts, ...contact] };
      });
    }

    nameInput.value = '';
    numberInput.value = '';
  };

  removeContact = e => {
    if (e.target.nodeName === 'BUTTON') {
      const contactName = e.currentTarget.getAttribute('name');
      return this.setState({
        contacts: this.state.contacts.filter(
          contact => contact.name !== contactName
        ),
      });
    }
  };

  handleFilterInput = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <div style={{ margin: '20px 0 0 20px' }}>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter handleInput={this.handleFilterInput} />
        <ContactList
          contacts={this.state.contacts}
          filterState={this.state.filter}
          handleBtnClick={this.removeContact}
        />
      </div>
    );
  }
}
