import { HeaderStyled } from './Header.styled';
import { LinkStyled } from 'components/Navigation/Link.styled';
import { NavigationStyled } from 'components/Navigation/Navigation.styled';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <HeaderStyled>
      <NavigationStyled>
        <LinkStyled to="/">Logo/Home</LinkStyled>
        {isLoggedIn ? (
          <>
            <LinkStyled to="/calculator">Calculator</LinkStyled>
            <LinkStyled to="/diary">Diary</LinkStyled>
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
