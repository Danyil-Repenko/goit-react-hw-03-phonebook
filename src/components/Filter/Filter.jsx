import PropTypes from 'prop-types';
import { InputWrapper, Label, Input } from './Filter.styled';

export const Filter = ({ handleInput }) => {
  return (
    <InputWrapper>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={handleInput} />
      </Label>
    </InputWrapper>
  );
};

Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
