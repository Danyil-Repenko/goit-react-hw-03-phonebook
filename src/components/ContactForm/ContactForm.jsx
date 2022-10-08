import PropTypes from 'prop-types';
import {
  Form,
  InputWrapper,
  Label,
  Input,
  SubmitBtn,
} from './ContactForm.styled';

export const ContactForm = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputWrapper>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputWrapper>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
