import { FooterStyled } from './Footer.styled';
import Modal from 'components/Modal/Modal';

const Footer = () => {
  return (
    <FooterStyled>
      <Modal />
      <ul>
        <li>©2023</li>
        <li>Made by BeeCode</li>
        <li>React App</li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
