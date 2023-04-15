import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { mediaSizes } from 'constants/media';
import { colors } from 'constants';

export const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 80px;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.color5};
  z-index: 1;
`;

export const Link = styled(NavLink)`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.22;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    font-size: 24px;
    line-height: 1.2;
  }

  &.active {
    color: ${colors.color2};
  }
`;

export const List = styled.ul`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
