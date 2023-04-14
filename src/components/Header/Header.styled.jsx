import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { container } from 'helpers';

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  height: 80px;
  border-bottom: 1px solid #e0e0e0;
  padding-right: 8px;

  @media screen and (min-width: ${mediaSizes.tablet}) {
    padding-right: 20px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    border-bottom: none;
  }
`;

export const HeaderContainer = styled.div`
  ${container}
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  border: none;
  padding: 15px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.svg`
  width: 12px;
  height: 12px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 14px;
    height: 14px;
    z-index: 10;
  }
`;
