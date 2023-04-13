// import PropTypes from 'prop-types';
import { LinkStyled } from './Link.styled';
import { NavigationStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationStyled>
      <li>
        <LinkStyled to="/">Home</LinkStyled>
      </li>
    </NavigationStyled>
  );
};

export default Navigation;
