import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { mediaSizes } from 'constants/media';
import { colors } from 'constants';
import { transition } from 'helpers';

export const Div = styled.div`
  @media screen and (max-width: ${mediaSizes.mobile}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 10px;
    width: 100%;
    height: 40px;
    background-color: #eff1f3;
    margin-left: auto;
  }

  @media screen and (min-width: ${mediaSizes.mobile}) {
    margin-left: auto;
  }
`;

export const BackButton = styled(Link)`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  @media screen and (max-width: ${mediaSizes.mobile}) {
    display: flex;
    align-items: center;
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
  border-left: 2px solid ${colors.color3};
  background-color: transparent;
  height: 32px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: ${colors.color2};
  ${transition('color')};

  &:hover {
    color: ${colors.color4};
  }
`;
