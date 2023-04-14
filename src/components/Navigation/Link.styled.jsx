import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';
import { NavLink } from 'react-router-dom';
import { mediaSizes } from 'constants/media';

export const LinkStyled = styled(NavLink)`
font-family: 'Verdana';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 1.21;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #9B9FAA;
${transition('opacity')};

  &:hover {
    opacity: 0.8;
  }

  &.active {
    rgba(33, 33, 33, 1)
  }
  
  @media screen and (min-width: ${mediaSizes.tablet}) {
      
  }
`;
