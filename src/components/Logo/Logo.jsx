import { ReactComponent as LogoIcon } from 'images/logo.svg';
import { LinkStyled } from './Logo.styled';

export const Logo = () => {
  return (
    <LinkStyled to="/">
      <LogoIcon />
    </LinkStyled>
  );
};
