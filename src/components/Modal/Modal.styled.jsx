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
  opacity: 1;
  ${transition('visible')};

  &.is-hidden {
    ${ishidden};

    & .inner {
      transform: scale(0.7);
      ${transition('transform')};
      animation: bounce_out 3000ms linear both;
    }
  }

  & .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translateX(-50%) translateY(-50%);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 672px;
      height: auto;
      max-width: calc(100% - 24px * 2);
    }
  }

  & .inner {
    height: 100%;
    transform: scale(1);
    ${transition('transform')};
    overflow: hidden;
    padding: 80px 40px;
    background-color: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    animation: bounce_in 1500ms ease-in-out both;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      box-shadow: 0px 22px 40px rgba(0, 0, 0, 0.1);
      padding: 64px 82px 82px 82px;
    }
  }

  & .close {
    background-color: #eff1f3;
    width: 100%;
    height: 40px;
    border: none;
    cursor: pointer;
    padding: 0;

    position: absolute;
    top: 0;
    right: 0;

    @media screen and (min-width: ${mediaSizes.tablet}) {
      background-color: transparent;
      border: none;

      width: 20px;
      height: 20px;
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
    cursor: pointer;
    ${transition('transform')}

    &:hover {
      transform: scale(1.2);
    }
  }

  @keyframes bounce_in {
    0% {
      -webkit-transform: matrix3d(
        0.7,
        0,
        0,
        0,
        0,
        0.7,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    3.4% {
      -webkit-transform: matrix3d(
        0.795,
        0,
        0,
        0,
        0,
        0.822,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.795,
        0,
        0,
        0,
        0,
        0.822,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    4.7% {
      -webkit-transform: matrix3d(
        0.835,
        0,
        0,
        0,
        0,
        0.88,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.835,
        0,
        0,
        0,
        0,
        0.88,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    6.81% {
      -webkit-transform: matrix3d(
        0.898,
        0,
        0,
        0,
        0,
        0.968,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.898,
        0,
        0,
        0,
        0,
        0.968,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    9.41% {
      -webkit-transform: matrix3d(
        0.965,
        0,
        0,
        0,
        0,
        1.05,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.965,
        0,
        0,
        0,
        0,
        1.05,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    10.21% {
      -webkit-transform: matrix3d(
        0.982,
        0,
        0,
        0,
        0,
        1.068,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.982,
        0,
        0,
        0,
        0,
        1.068,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    13.61% {
      -webkit-transform: matrix3d(
        1.037,
        0,
        0,
        0,
        0,
        1.1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(1.037, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    14.11% {
      -webkit-transform: matrix3d(
        1.042,
        0,
        0,
        0,
        0,
        1.099,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        1.042,
        0,
        0,
        0,
        0,
        1.099,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    17.52% {
      -webkit-transform: matrix3d(
        1.062,
        0,
        0,
        0,
        0,
        1.072,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        1.062,
        0,
        0,
        0,
        0,
        1.072,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    18.72% {
      -webkit-transform: matrix3d(
        1.064,
        0,
        0,
        0,
        0,
        1.056,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        1.064,
        0,
        0,
        0,
        0,
        1.056,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    21.32% {
      -webkit-transform: matrix3d(
        1.059,
        0,
        0,
        0,
        0,
        1.021,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        1.059,
        0,
        0,
        0,
        0,
        1.021,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    24.32% {
      -webkit-transform: matrix3d(
        1.045,
        0,
        0,
        0,
        0,
        0.988,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        1.045,
        0,
        0,
        0,
        0,
        0.988,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    25.23% {
      -webkit-transform: matrix3d(
        1.04,
        0,
        0,
        0,
        0,
        0.981,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        1.04,
        0,
        0,
        0,
        0,
        0.981,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    29.03% {
      -webkit-transform: matrix3d(
        1.019,
        0,
        0,
        0,
        0,
        0.969,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        1.019,
        0,
        0,
        0,
        0,
        0.969,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    29.93% {
      -webkit-transform: matrix3d(
        1.014,
        0,
        0,
        0,
        0,
        0.97,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        1.014,
        0,
        0,
        0,
        0,
        0.97,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    35.54% {
      -webkit-transform: matrix3d(
        0.994,
        0,
        0,
        0,
        0,
        0.989,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.994,
        0,
        0,
        0,
        0,
        0.989,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    36.74% {
      -webkit-transform: matrix3d(
        0.991,
        0,
        0,
        0,
        0,
        0.994,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.991,
        0,
        0,
        0,
        0,
        0.994,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    41.04% {
      -webkit-transform: matrix3d(
        0.988,
        0,
        0,
        0,
        0,
        1.007,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.988,
        0,
        0,
        0,
        0,
        1.007,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    44.44% {
      -webkit-transform: matrix3d(
        0.99,
        0,
        0,
        0,
        0,
        1.01,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(0.99, 0, 0, 0, 0, 1.01, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    52.15% {
      -webkit-transform: matrix3d(
        0.997,
        0,
        0,
        0,
        0,
        1.002,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.997,
        0,
        0,
        0,
        0,
        1.002,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    59.86% {
      -webkit-transform: matrix3d(
        1.002,
        0,
        0,
        0,
        0,
        0.997,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        1.002,
        0,
        0,
        0,
        0,
        0.997,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    63.26% {
      -webkit-transform: matrix3d(
        1.002,
        0,
        0,
        0,
        0,
        0.998,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        1.002,
        0,
        0,
        0,
        0,
        0.998,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    75.28% {
      -webkit-transform: matrix3d(
        1,
        0,
        0,
        0,
        0,
        1.001,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(1, 0, 0, 0, 0, 1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    85.49% {
      -webkit-transform: matrix3d(
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    90.69% {
      -webkit-transform: matrix3d(
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    100% {
      -webkit-transform: matrix3d(
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
  }
  @keyframes bounce_out {
    0% {
      -webkit-transform: matrix3d(
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    4.2% {
      -webkit-transform: matrix3d(
        0.451,
        0,
        0,
        0,
        0,
        0.451,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.451,
        0,
        0,
        0,
        0,
        0.451,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    8.31% {
      -webkit-transform: matrix3d(
        0.116,
        0,
        0,
        0,
        0,
        0.116,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.116,
        0,
        0,
        0,
        0,
        0.116,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    12.51% {
      -webkit-transform: matrix3d(
        -0.032,
        0,
        0,
        0,
        0,
        -0.032,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        -0.032,
        0,
        0,
        0,
        0,
        -0.032,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    16.62% {
      -webkit-transform: matrix3d(
        -0.063,
        0,
        0,
        0,
        0,
        -0.063,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        -0.063,
        0,
        0,
        0,
        0,
        -0.063,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    27.73% {
      -webkit-transform: matrix3d(
        -0.013,
        0,
        0,
        0,
        0,
        -0.013,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        -0.013,
        0,
        0,
        0,
        0,
        -0.013,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    38.84% {
      -webkit-transform: matrix3d(
        0.003,
        0,
        0,
        0,
        0,
        0.003,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(
        0.003,
        0,
        0,
        0,
        0,
        0.003,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
    }
    61.06% {
      -webkit-transform: matrix3d(
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    83.28% {
      -webkit-transform: matrix3d(
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    100% {
      -webkit-transform: matrix3d(
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      );
      transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
  }
`;
