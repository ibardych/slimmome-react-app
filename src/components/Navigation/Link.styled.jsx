import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  font-size: 16px;
  padding: 5px 10px;
  font-weight: 300;
  color: #000;
  ${transition('opacity')};

  &:hover {
    opacity: 0.8;
  }

  &.active {
    color: ${colors.color1};
  }
`;
