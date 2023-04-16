import { FormFields, RegisterFormStyled } from './RegisterForm.styled';
import {
  FormContainer,
  Caption,
  ButtonContainer,
} from 'components/Form/Form.styled';
import {
  InputWraper,
  InputField,
  LabeForInput,
  LabelInfo,
} from 'components/Form/Input.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const defaultFields = { username: '', email: '', password: '' };

export const RegisterForm = () => {
  const [fields, setFields] = useState(defaultFields);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        username: form.elements.username.value,
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
    const path = '/login';
    navigate(path);
  };

  return (
    <RegisterFormStyled>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Caption>Register</Caption>
        <FormFields>
          <InputWraper>
            <InputField
              type="text"
              name="username"
              autocomplete="off"
              required
              value={fields.name}
              onChange={handleInputChange}
            />
            <LabeForInput htmlFor="email" className="labelName">
              <LabelInfo className="contentName">Email *</LabelInfo>
            </LabeForInput>
          </InputWraper>

          <InputWraper>
            <InputField
              type="text"
              name="email"
              autocomplete="off"
              required
              value={fields.name}
              onChange={handleInputChange}
            />
            <LabeForInput htmlFor="email" className="labelName">
              <LabelInfo className="contentName">Email *</LabelInfo>
            </LabeForInput>
          </InputWraper>

          <InputWraper>
            <InputField
              type="password"
              name="password"
              autocomplete="off"
              required
              value={fields.name}
              onChange={handleInputChange}
            />
            <LabeForInput htmlFor="password" className="labelName">
              <LabelInfo className="contentName">Password *</LabelInfo>
            </LabeForInput>
          </InputWraper>
        </FormFields>
        <ButtonContainer>
          <Button
            className="white regLogbutton"
            type="submit"
            onClick={redirection}
          >
            Log In
          </Button>
          <Button className="orange regLogbutton" type="submit">
            Register
          </Button>
        </ButtonContainer>
      </FormContainer>
    </RegisterFormStyled>
  );
};
