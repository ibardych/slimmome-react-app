import { HeaderStyled } from './Header.styled';
import { LinkStyled } from 'components/Navigation/Link.styled';
import { NavigationStyled } from 'components/Navigation/Navigation.styled';
import { Button } from 'components/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const onLogOut = () => {
    console.log('1');
    dispatch(logOut());
  };

  return (
    <HeaderStyled>
      <NavigationStyled>
        <LinkStyled to="/">Logo/Home</LinkStyled>
        {isLoggedIn ? (
          <>
            <LinkStyled to="/calculator">Calculator</LinkStyled>
            <LinkStyled to="/diary">Diary</LinkStyled>
            <Button className="white" type="button" onClick={onLogOut}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <LinkStyled to="/login">Login</LinkStyled>
            <LinkStyled to="/register">Register</LinkStyled>
          </>
        )}
      </NavigationStyled>
    </HeaderStyled>
  );
};

export default Header;
