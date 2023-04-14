import { HeaderStyled } from './Header.styled';
import { RiMenuFill } from 'react-icons/ri';
import { Button } from './Header.styled';
// import { LinkStyled } from 'components/Navigation/Link.styled';
// import { NavigationStyled } from 'components/Navigation/Navigation.styled';
import Navigation from 'components/Navigation/Navigation';
import { ReactComponent as Logo } from '../logo.svg';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { mediaSizes } from 'constants/media';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [showBurgerIcon, setShowBurgerIcon] = useState(false);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const handleResize = () => {
      if (screenWidth <= 480) {
        setShowBurgerIcon(true);
      } else {
        setShowBurgerIcon(false);
      }
    };
    handleResize();
  }, [screenWidth]);

  return (
    <HeaderStyled>
      <Logo />
      {/* <NavigationStyled>
        <LinkStyled to="/login">Login</LinkStyled>
        <LinkStyled to="/register">Register</LinkStyled>
        <LinkStyled to="/calculator">Calculator</LinkStyled>
        <LinkStyled to="/diary">Diary</LinkStyled>
      </NavigationStyled> */}
      {!showBurgerIcon && <Navigation />}
      {showBurgerIcon && (
        <Button>
          <RiMenuFill />
        </Button>
      )}
    </HeaderStyled>
  );
};

export default Header;
