import { HeaderStyled } from './Header.styled';
import { LinkStyled } from 'components/Navigation/Link.styled';
import { NavigationStyled } from 'components/Navigation/Navigation.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <NavigationStyled>
        <LinkStyled to="/login">Login</LinkStyled>
        <LinkStyled to="/register">Register</LinkStyled>
        <LinkStyled to="/calculator">Calculator</LinkStyled>
        <LinkStyled to="/diary">Diary</LinkStyled>
      </NavigationStyled>
    </HeaderStyled>
  );
};

export default Header;
