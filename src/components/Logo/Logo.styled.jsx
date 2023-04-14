import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  cursor: pointer;

  &:hover {
  }

  &.active {
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
  }
`;
