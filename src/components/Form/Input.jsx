import { PropTypes } from 'prop-types';
import { Label, Title, InputStyled } from './Input.styled';

const Input = props => {
  const { type, name, value, onChange, pattern, title, required, label } =
    props;

  return (
    <Label>
      {label && <Title>{label}</Title>}
      <InputStyled
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        title={title}
        required={required}
      />
    </Label>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
};

export default Input;
