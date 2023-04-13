import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { ishidden, transition } from 'helpers';

export const ModalStyled = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(33, 33, 33, 0.12);

  & .is-hidden {
    ${ishidden};
  }

  & .modal {
    position: fixed;
    top: 50%;
    left: 50%;

    width: 100%;
    height: 100%;
    padding: 80px 40px;

    background-color: #ffffff;

    font-family: 'Verdana';
    overflow: hidden;

    transform: translateX(-50%) translateY(-50%);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
      padding: 64px 82px 82px 82px;

      width: 672px;
      height: 574px;
    }
  }

  & .close {
    background-color: #eff1f3;
    width: 100%;
    height: 40px;
    border: none;

    position: absolute;
    top: 0;
    right: 0;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      background-color: transparent;
      border: none;

      width: 22px;
      height: 22px;
      right: 24px;
      top: 24px;
      ${transition('transform')}

      &:hover {
        transform: scale(1.2);
      }

      &__icon {
        fill: #000000;
        width: 20px;
        height: 20px;
      }
    }
  }

  & .return__icon {
    position: absolute;
    left: 20px;
    top: 10px;
    width: 25px;
    height: 20px;
    ${transition('transform')}

    &:hover {
      transform: scale(1.2);
    }
  }

  & .title {
    font-size: 18px;
    line-height: 1.4;
    max-width: 280px;

    color: #212121;

    margin: 0 auto;
    margin-bottom: 42px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 26px;
      text-align: center;
      max-width: 450px;
      margin-bottom: 20px;
    }
  }

  & .kcal {
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.04em;
    display: flex;
    gap: 8px;
    align-items: baseline;
    justify-content: center;

    position: relative;

    color: #264061;
    margin-bottom: 32px;

    &-number {
      font-size: 48px;
    }

    &-text {
      text-align: center;
      font-size: 18px;
    }
  }

  & .recomendation {
    width: 280px;
    align-items: center;
    margin: 0 auto;

    border-top: 1px solid #e0e0e0;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 330px;
    }

    &__title {
      font-size: 14px;
      line-height: 1.2;
      letter-spacing: 0.04em;
      font-weight: 700;

      color: #212121;
      margin-top: 20px;
      margin-bottom: 20px;

      @media screen and (min-width: ${mediaSizes.tablet}) {
        margin-top: 12px;
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 10px;

      padding-left: 24px;

      margin-bottom: 40px;
    }

    &__item {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;

      color: #9b9faa;
    }
  }
`;
