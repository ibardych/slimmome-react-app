import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { colors } from 'constants';

export const Div = styled.div`
  @media screen and (min-width: ${mediaSizes.mobile}) {
    margin-left: auto;
  }
`;
export const Span = styled.span`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${colors.color4};
`;
export const Button = styled.button`
  margin-left: 15px;
  padding-left: 15px;
  border: none;
  background-color: transparent;
  border-left: 2px solid ${colors.color3};
  height: 32px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${colors.color2};
`;
