import { RegisterFormStyled } from './RegisterForm.styled';
import { FormContainer } from 'components/Form/Form.styled';
import Input from 'components/Form/Input';
import { useState } from 'react';
import { Button } from 'components/Styled';

const defaultFields = { name: '', email: '', password: '' };

export const RegisterForm = () => {
  const [fields, setFields] = useState(defaultFields);
  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFields(fields => ({ ...fields, [name]: value }));
  };

  return (
    <RegisterFormStyled>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Input
          label="Name"
          type="text"
          name="name"
          value={fields.name}
          onChange={handleInputChange}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={fields.email}
          onChange={handleInputChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={fields.password}
          onChange={handleInputChange}
        />
        <Button type="submit">Register</Button>
      </FormContainer>
    </RegisterFormStyled>
  );
};
