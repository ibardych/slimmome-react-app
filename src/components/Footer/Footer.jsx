import { FooterStyled } from './Footer.styled';
import { GiBee } from 'react-icons/gi';

const Footer = () => {
  return (
    <FooterStyled>
      <ul>
        <li>© 2023</li>
        <li>
          <p>Made by BeeCode</p>
          <GiBee className="icon" />
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
