import {
  FormContainer,
  Caption,
  Label,
  ButtonContainer,
} from 'components/Form/Form.styled';
import Input from 'components/Form/Input';
import {
  InputWraper,
  InputField,
  LabeForInput,
  LabelInfo
} from 'components/Form/Input.styled';
import css from '../Form/Input.module.css';
import { Button } from 'components/Styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormFields, LoginFormStyled } from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import Message from 'components/Message/Message';

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
          <InputWraper>
            <InputField
              type="text"
              name="email"
              autocomplete="off"
              required
              value={fields.name}
              onChange={handleInputChange}
            />
            <LabeForInput for="email" className="labelName">
              <LabelInfo className="contentName">Email *</LabelInfo>
            </LabeForInput>
          </InputWraper>

          <InputWraper>
            <InputField
              type="text"
              name="password"
              autocomplete="off"
              required
              value={fields.name}
              onChange={handleInputChange}
            />
            <LabeForInput for="password" className="labelName">
              <LabelInfo className="contentName">Password *</LabelInfo>
            </LabeForInput>
          </InputWraper>
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
