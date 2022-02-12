import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import SwiperCore from 'swiper';

import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper';
import Favorite from '../../../../components/Favorite';
import { DetailsProps } from '../../Detail';
import { IconWrap, ImageContainer } from './ImageSection.style';

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
        {images?.map((imageUrl, index) => (
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
        {images?.map((imageUrl, index) => (
          <SwiperSlide key={imageUrl}>
            <img src={imageUrl} alt={`preview${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageContainer>
  );
}

export default ImageSection;
