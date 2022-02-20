import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import zIndex from '../../../../styles/zIndex';

export const ImageContainer = styled.div`
  /* Positioning */
  display: flex;
  position: relative;
  .mySwiper2 {
    /* Display & Box Model */
    width: 95%;
    height: 100%;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
      /* Display & Box Model */
      width: 48px;
      height: 48px;
      border-radius: 50%;

      /* Color */
      background-color: ${COLORS.white};
      color: ${COLORS.mainFont};
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 24px;
    }
  }
  .mySwiper {
    /* Display & Box Model */
    width: 9%;
    height: 100%;
    img {
      /* Display & Box Model */
      width: 60px;
      height: 60px;
      border-radius: 10px;

      /* Other */
      cursor: pointer;
    }
    .swiper-wrapper {
      height: auto;
      flex-direction: column;
    }
    .swiper-slide {
      height: 60px;
    }
    .swiper-slide {
      opacity: 0.5;
    }
    .swiper-slide-thumb-active {
      opacity: 1;
      img {
        border: 2px solid #000;
      }
    }
  }
`;

export const IconWrap = styled.div`
  /* Positioning */
  position: absolute;
  top: 10px;
  right: 10px;

  /* Other */
  z-index: ${zIndex.floating};
`;
