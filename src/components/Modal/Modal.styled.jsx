import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { ishidden, transition } from 'helpers';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000091;
  z-index: 3;
  opacity: 1;
  ${transition('visible')};
  border-radius: 10px;

  &.is-hidden {
    ${ishidden};

    & .inner {
      transform: scale(0.7);
      ${transition('transform')};
    }
  }

  & .window {
    position: fixed;
    top: 50%;
    left: 50%;
    width: calc(${mediaSizes.mobile} - 24px * 2);
    max-width: calc(100% - 24px * 2);
    transform: translateX(-50%) translateY(-50%);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: ${mediaSizes.mobile};
      max-width: ${mediaSizes.mobile};
    }
  }

  & .inner {
    transform: scale(1);
    border-radius: 10px;
    box-shadow: 10px 10px 30px 10px #00000044;
    ${transition('transform')};
    overflow: hidden;
  }

  & .close {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 14px;
    right: 14px;
    cursor: pointer;
    background-color: rgb(0 0 0 / 0);
    border: none;
    padding: 0;
    color: #333;
    ${transition('opacity')};

    &:hover {
      opacity: 0.7;
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 24px;
      height: 24px;
      top: 16px;
      right: 16px;
    }
  }

  & .container {
    padding: 28px 16px;
    background-color: #fff;
    position: relative;
    z-index: 1;
    border-radius: 8px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      padding: 48px 32px;
    }
  }

  & .text {
    color: #333;
    font-size: 30px;
    font-weight: 300;
  }
`;
