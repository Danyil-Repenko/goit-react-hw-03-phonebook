import PropTypes from 'prop-types';
import { DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ name, number, handleRemoval }) => {
  return (
    <li onClick={handleRemoval} name={name} style={{ marginBottom: 10 }}>
      {name}: {number}
      <DeleteBtn type="button">Delete</DeleteBtn>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleRemoval: PropTypes.func.isRequired,
};
