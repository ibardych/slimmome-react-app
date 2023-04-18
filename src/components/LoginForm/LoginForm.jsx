import { Caption, ButtonContainer } from 'components/Form/Form.styled';
import { InputWraper } from 'components/Form/Input.styled';
import { Button } from 'components/Styled';
import { useNavigate } from 'react-router-dom';
import { FormFields, LoginFormStyled } from './LoginForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectError } from 'redux/auth/selectors';
import Message from 'components/Message/Message';
import ShowPassword from 'components/ShowPassword/ShowPassword';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().min(3).max(254).required(),
    password: yup.string().min(8).max(100).required(),
  });

  const initialValues = { email: '', password: '' };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
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
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Caption>Login</Caption>
          <FormFields>
            <InputWraper>
              <Field type="text" name="email" placeholder=" " />
              <label htmlFor="email">Email *</label>
              <ErrorMessage className="error" component="div" name="email" />
            </InputWraper>

            <InputWraper>
              <Field
                type={passwordShown ? 'text' : 'password'}
                name="password"
                placeholder=" "
              />
              <label htmlFor="password">Password *</label>
              <ShowPassword
                clickHandler={onClickHandler}
                isShown={passwordShown}
              />
              <ErrorMessage className="error" component="div" name="password" />
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button className="orange regLogbutton" type="submit">
              Log In
            </Button>
            <Button
              className="white regLogbutton"
              type="button"
              onClick={redirection}
            >
              Register
            </Button>
          </ButtonContainer>
        </Form>
      </Formik>
      {message && <Message>{message}</Message>}
    </LoginFormStyled>
  );
};
