import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { colors } from 'constants';
import { container, transition } from 'helpers';

export const DiaryStyled = styled.div`
  ${container}
  margin-top: 140px;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    width: 60%;
    padding: 0;
  }

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
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    font-weight: 400;

    color: #212121;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
    width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

   
    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 240px;
      padding-bottom: 20px;
    }
  
  }
  & .Diary__list-gram {
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    letter-spacing: 0.04em;
    font-weight: 400;
    white-space: nowrap;

    color: #212121;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
    width: 49px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 106px;
      padding-bottom: 20px;
    }
  }
  & .Diary__list-kcal {
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    letter-spacing: 0.04em;
    font-weight: 400;
    white-space: nowrap;

    color: #212121;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
    width: 58px;
    margin-right: 17px;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 106px;
      margin-right: 32px;
      padding-bottom: 20px;
    }
  }
  & .Diary__btn {
    background-color: transparent;
    border: none;
    width: 15px;
    height: 15px;
    color: #9b9faa;
    margin-right: 10px;
  }
  & .Diarty__list {
    display: flex;
    gap: 10px;
  }

  & .Diarty__list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: ${mediaSizes.tablet}) {
      gap: 16px;
    }
  }

  & .Diarty__header-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      align-items: flex-start;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0px;
      pointer-events: none;

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
      }
    }
  }
  & .Diary__header-wraper-data {
    display: flex;
    align-items: center;
    height: 20px;

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
`;

export const DiaryForm = styled.form`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  display: none;
  @media screen and (min-width: ${mediaSizes.mobile}) {
    /* flex-direction: column;
    align-items: center; */
    /* display: none; */
  }
  @media screen and (min-width: ${mediaSizes.tablet}) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: ${mediaSizes.desktop}) {
    flex-direction: row;
    align-items: center;
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 280px;
  position: relative;
  overflow-y: auto;
  width: 100%;
  margin-top: 32px;

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
  @media screen and (min-width: ${mediaSizes.tablet}) {
    margin-top: 60px;
  }

  & > li:last-child {
    margin-bottom: 6px;
  }
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 15px;
  max-height: 300px;
  width: 350px;
  overflow-y: scroll;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 3;
  top: 122px;
  background-color: white;
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  ::-webkit-scrollbar {
    width: 6px;
    height: 0px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #f0f1f3;
  }

  ::-webkit-scrollbar-thumb {
    background: #264061;
  }

  @media screen and (min-width: ${mediaSizes.tablet}) {
    top: 364px;
    max-height: 400px;
    width: 400px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    top: 444px;
    max-height: 350px;
    width: 440px;
  }

  & li {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: ${colors.color2};

    padding: 10px 0;
    cursor: pointer;

    &:not(:last-child) {
      border-bottom: 0.5px solid ${colors.color2};
      transition: ${transition};
    }

    &:hover {
      color: ${colors.color4};
      border-bottom: 0.5px solid ${colors.color4};
    }
  }
`;

export const EmptyProductsMessage = styled.p`
  margin-top: 30px;
  color: ${colors.color2};
`;
