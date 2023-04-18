import { FooterStyled, Team } from './Footer.styled';
import { GiBee } from 'react-icons/gi';
import beeCodeTeam from 'images/Team/BeeCodeTeam.jpg';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Footer = () => {
  const [teamOpened, setTeamOpened] = useState(false);

  const toggleTeam = () => {
    setTeamOpened(!teamOpened);
  };

  return (
    <FooterStyled>
      <ul>
        <li>© 2023</li>
        <li>
          <p>
            Made by{' '}
            <span className="teamname" onClick={toggleTeam}>
              BeeCode
            </span>
          </p>
          <GiBee className="icon" />
        </li>
      </ul>

      <Team onClick={toggleTeam} className={teamOpened ? 'opened' : ''}>
        <img src={beeCodeTeam} alt="Bee Code Tem" />
        <IoMdClose />
      </Team>
    </FooterStyled>
  );
};

export default Footer;
