import {
  FormContainer,
  Caption,
  Label,
  ButtonContainer,
} from 'components/Form/Form.styled';
import Input from 'components/Form/Input';
import { Button } from 'components/Styled';
import { useState } from 'react';
import { FormFields, LoginFormStyled } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const defaultFields = { email: '', password: '' };

export const LoginForm = () => {
  const [fields, setFields] = useState(defaultFields);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFields(fields => ({ ...fields, [name]: value }));
  };

  return (
    <LoginFormStyled>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Caption>Login</Caption>
        <FormFields>
          <Label>Email *</Label>
          <Input
            type="email"
            name="email"
            value={fields.name}
            onChange={handleInputChange}
          />
          <Label>Password *</Label>
          <Input
            type="password"
            name="password"
            value={fields.name}
            onChange={handleInputChange}
          />
        </FormFields>
        <ButtonContainer>
          <Button className="orange regLogbutton" type="submit">
            Log In
          </Button>
          <Button className="white regLogbutton" type="submit">
            Register
          </Button>
        </ButtonContainer>
      </FormContainer>
    </LoginFormStyled>
  );
};
