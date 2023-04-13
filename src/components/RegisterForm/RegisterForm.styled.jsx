import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';

export const RegisterFormStyled = styled.div`
  margin: 0 auto;
  max-width: 320px;
  padding-top: 40px;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-left: 32px;
  }
`;
