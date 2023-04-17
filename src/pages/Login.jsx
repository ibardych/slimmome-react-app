import { Background } from 'components/Background/Background';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <LoginForm />
      {!isLoggedIn && <Background />}
    </>
  );
};

export default Login;
