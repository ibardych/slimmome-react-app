import styled from '@emotion/styled';
import { mediaSizes } from 'constants';

export const DiaryForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${mediaSizes.mobile}) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: ${mediaSizes.tablet}) {
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const DiaryStyled = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;

  input:focus {
    outline: none;
  }
  & .Diary__box_line {
    display: flex;
    flex-direction: column;
    height: 35px;
  }
  & .Diary__input_name::placeholder {
    font-family: 'Verdana';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.04em;

    color: #9b9faa;
  }
  & .Diary__input_grams::placeholder {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: left;
    letter-spacing: 0.04em;

    color: #9b9faa;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      text-align: left;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      text-align: right;
    }
    @media screen and (min-width: ${mediaSizes.mobile}) {
      text-align: right;
    }
  }
  & .Diary__box_input {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      gap: 47px;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      gap: 22px;
      flex-direction: row;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      gap: 48px;
      flex-direction: row;
    }
  }
  & .Diary__list-name {
    font-family: 'Verdana';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;

    color: #212121;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    width: 240px;
    margin-right: 48px;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      width: 130px;
      height: 21px;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 240px;
      height: 34px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 240px;
      height: 34px;
    }
  }
  & .Diary__list-gram {
    font-family: 'Verdana';
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    letter-spacing: 0.04em;

    color: #212121;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    width: 106px;
    margin-right: 32px;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      width: 49px;
      height: 21px;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 106px;
      height: 34px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 106px;
      height: 34px;
    }
  }
  & .Diary__list-kcal {
    font-family: 'Verdana';
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    letter-spacing: 0.04em;

    color: #212121;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 20px;
    width: 106px;
    margin-right: 32px;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      width: 58px;
      margin-right: 17px;
      height: 21px;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 106px;
      margin-right: 32px;
      height: 34px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 106px;
      margin-right: 32px;
      height: 34px;
    }
  }
  & .Diary__btn {
    background-color: transparent;
    border: none;
    width: 15px;
    height: 15px;
    color: #9b9faa;
    margin-right: 40px;
  }
  & .Diarty__list {
    display: flex;
  }

  & .Diarty__list-wrapper {
    display: flex;
    flex-direction: column;
  }

  & .Diarty__header-wrapper {
    position: relative;

    @media screen and (min-width: ${mediaSizes.mobile}) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      display: flex;
      align-items: flex-start;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      display: flex;
      align-items: flex-start;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0px;
      pointer-events: none;

      @media screen and (min-width: ${mediaSizes.mobile}) {
      }
      @media screen and (min-width: ${mediaSizes.tablet}) {
        width: 100%;
        height: 60px;
        margin-top: -50px;
        position: relative;
        background-image: linear-gradient(
          0deg,
          #ffffff 18%,
          rgba(255, 255, 255, 0) 100%
        );
      }
      @media screen and (min-width: ${mediaSizes.desktop}) {
        width: calc(100% - 5px);
        height: 60px;
        margin-top: -50px;
        position: relative;
        background-image: linear-gradient(
          0deg,
          #ffffff 18%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
  }
  & .Diary__header-wraper-data {
    display: flex;
    align-items: center;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      margin-bottom: 32px;
      height: 20px;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      margin-bottom: 60px;
      height: 38px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      margin-bottom: 60px;
      height: 38px;
    }
  }
  & .Diary__data {
    font-family: 'Verdana';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    margin-right: 21px;
    color: #212121;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      font-size: 18px;
      line-height: 22px;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      font-size: 34px;
      line-height: 41px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      font-size: 34px;
      line-height: 41px;
    }
  }
  & .Diary__icon-data {
    width: 25px;
    height: 25px;
    @media screen and (min-width: ${mediaSizes.mobile}) {
      width: 15px;
      height: 15px;
    }
    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 25px;
      height: 25px;
    }
    @media screen and (min-width: ${mediaSizes.desktop}) {
      width: 25px;
      height: 25px;
    }
  }
`;

export const DiaryStyledInp1 = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 280px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 240px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 240px;
    margin-bottom: 20px;
  }
`;
export const DiaryStyledInp2 = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;

  @media screen and (min-width: ${mediaSizes.mobile}) {
    width: 285px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${mediaSizes.tablet}) {
    width: 104px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 105px;
    margin-bottom: 20px;
  }
`;
// export const DiaryStyledInpSpan1 = styled.span`
//   border: 1px solid #e0e0e0;
//   @media screen and (min-width: ${mediaSizes.mobile}) {
//     width: 280px;
//   }
//   @media screen and (min-width: ${mediaSizes.tablet}) {
//     width: 240px;
//   }
//   @media screen and (min-width: ${mediaSizes.desktop}) {
//     width: 240px;
//   }
// `;
// export const DiaryStyledInpSpan2 = styled.span`
//   border: 1px solid #e0e0e0;
//   @media screen and (min-width: ${mediaSizes.mobile}) {
//     width: 280px;
//   }
//   @media screen and (min-width: ${mediaSizes.tablet}) {
//     width: 106px;
//   }
//   @media screen and (min-width: ${mediaSizes.desktop}) {
//     width: 107px;
//   }
// `;

export const DiaryStyledList = styled.ul`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 280px;
  position: relative;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #f0f1f3;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #264061;
    background-size: contain;
  }
`;
