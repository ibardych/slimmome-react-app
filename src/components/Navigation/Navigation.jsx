// import PropTypes from 'prop-types';
import { LinkStyled } from './Link.styled';
import { NavigationStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return !isLoggedIn ? (
    <NavigationStyled>
      <li>
        <LinkStyled to="/login">log in</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/register">registation</LinkStyled>
      </li>
    </NavigationStyled>
  ) : (
    <NavigationStyled className="borderLeft">
      <li>
        <LinkStyled to="/diary">diary</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/calculator">calculator</LinkStyled>
      </li>
    </NavigationStyled>
  );
};

export default Navigation;
