import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';

export const NavigationStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 32px;
  margin-left: 32px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    gap: 24px;
    margin-left: 32px;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    border-left: 1px solid rgba(224, 224, 224, 1);
    margin-left: 32px;
    padding-left: 20px;
  }
`;
