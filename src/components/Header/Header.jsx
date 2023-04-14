import { HeaderStyled, MenuButton, Icon } from './Header.styled';
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import { ReactComponent as Logo } from '../logo.svg';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { mediaSizes } from 'constants/media';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Header = () => {
  const [showBurgerIcon, setShowBurgerIcon] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 20;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= parseInt(mediaSizes.desktop)) {
        setShowBurgerIcon(true);
      } else {
        setShowBurgerIcon(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const clickHandler = () => {
    if (!isLoggedIn) return;
    setIsMobileMenuOpen(state => !state);
  };

  return (
    <HeaderStyled
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 1)' : 'transparent',
      }}
    >
      <Logo />
      {!showBurgerIcon && <Navigation />}
      {isLoggedIn && <UserInfo />}
      {showBurgerIcon && (
        <MenuButton
          style={{ marginLeft: isLoggedIn ? '51px' : 'auto' }}
          onClick={clickHandler}
        >
          {isMobileMenuOpen ? (
            <Icon>
              <RiCloseLine />
            </Icon>
          ) : (
            <RiMenuFill width="18" height="12" />
          )}
        </MenuButton>
      )}
      {isMobileMenuOpen && <MobileMenu />}
    </HeaderStyled>
  );
};

export default Header;
