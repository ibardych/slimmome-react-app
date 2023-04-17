import {
  FormContainer,
  Caption,
  Label,
  ButtonContainer,
} from 'components/Form/Form.styled';
import Input from 'components/Form/Input';
import { Button } from 'components/Styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormFields, LoginFormStyled } from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import Message from 'components/Message/Message';
import ShowPassword from 'components/ShowPassword/ShowPassword';

const defaultFields = { email: '', password: '' };

export const LoginForm = () => {
  const [fields, setFields] = useState(defaultFields);
  const [passwordShown, setPasswordShown] = useState(false);
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

  const onClickHandler = () => {
    setPasswordShown(state => !state);
  };

  const navigate = useNavigate();
  const redirection = () => {
    const path = '/register';

    navigate(path);
  };

  const message = useSelector(selectError);

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
          <Label>
            Password *
            <Input
              type={passwordShown ? 'text' : 'password'}
              name="password"
              value={fields.name}
              onChange={handleInputChange}
            />
            <ShowPassword
              clickHandler={onClickHandler}
              isShown={passwordShown}
            />
          </Label>
        </FormFields>
        <ButtonContainer>
          <Button className="orange regLogbutton" type="submit ">
            Log In
          </Button>
          <Button
            className="white regLogbutton"
            type="submit"
            onClick={redirection}
          >
            Register
          </Button>
        </ButtonContainer>
      </FormContainer>
      {message && <Message>{message}</Message>}
    </LoginFormStyled>
  );
};
