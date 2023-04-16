import styled from '@emotion/styled';
import { colors } from 'constants';
import { mediaSizes } from 'constants';

export const ModalDailyCaloriesStyled = styled.div`
  & .title {
    font-size: 18px;
    line-height: 1.4;
    max-width: 280px;

    color: ${colors.color4};

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

    color: ${colors.color5};
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

    border-top: 1px solid ${colors.color3};

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 330px;
    }

    &__title {
      font-size: 14px;
      line-height: 1.2;
      letter-spacing: 0.04em;
      font-weight: 700;

      color: ${colors.color4};
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

      /* width */
      ::-webkit-scrollbar {
        width: 6px;
        height: 0px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px #f0f1f3;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #264061;
      }
    }

    &__item {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.04em;

      color: ${colors.color2};
    }
  }

  & .button-container {
    display: flex;
    justify-content: center;
  }
`;
