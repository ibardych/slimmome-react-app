import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants/media';

export const FormContainer = styled.form``;

export const Caption = styled.p`
  margin: 0;
  margin-top: 160px;
  margin-bottom: 55px;
  margin-right: auto;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: ${colors.color1};
`;

export const Label = styled.span`
  margin: 0;
  margin-right: auto;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.04em;
  color: ${colors.color2};
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
    gap: 32px;
  }
`;
