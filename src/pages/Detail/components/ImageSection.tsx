import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import SwiperCore from 'swiper';

import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper';
import Favorite from '../../../components/Favorite';
import { DetailsProps } from '../Detail';

interface Props {
  images: DetailsProps['images'];
}

const swiperSettingType = {
  effectType: 'fade',
  slidesPerView: 'auto',
  direction: 'vertical',
} as const;

const thumbSwiperSettings = {
  spaceBetween: 10,
  slidesPerView: swiperSettingType.slidesPerView,
  watchSlidesProgress: true,
  modules: [Navigation, Thumbs],
  direction: swiperSettingType.direction,
};

const mainSwiperSettings = {
  loop: true,
  spaceBetween: 5,
  modules: [FreeMode, Navigation, Thumbs, EffectFade],
  navigation: true,
  effect: swiperSettingType.effectType,
  fadeEffect: { crossFade: true },
  speed: 500,
  watchSlidesProgress: true,
  allowTouchMove: false,
  lazy: true,
};

function ImageSection({ images }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore>();

  return (
    <ImageContainer>
      <IconWrap>
        <Favorite size="large" />
      </IconWrap>
      <Swiper
        {...thumbSwiperSettings}
        onSwiper={setThumbsSwiper}
        className="mySwiper"
      >
        {images?.map((imageUrl: string, index: number) => (
          <SwiperSlide key={imageUrl}>
            <img src={imageUrl} alt={`preview${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        {...mainSwiperSettings}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        className="mySwiper2"
      >
        {images?.map((imageUrl: string, index: number) => (
          <SwiperSlide key={imageUrl}>
            <img src={imageUrl} alt={`preview${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  display: flex;
  width: 700px;
  height: 540px;
  position: relative;
  .mySwiper2 {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #fff;
      color: black;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 24px;
    }
  }
  .mySwiper {
    width: 10%;
    height: 100%;
    margin: 0 5px;
    img {
      width: 60px;
      height: 60px;
      border-radius: 10px;
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

const IconWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
`;

export default ImageSection;
