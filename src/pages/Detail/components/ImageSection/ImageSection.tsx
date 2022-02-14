import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import SwiperCore from 'swiper';

import Favorite from '../../../../components/Favorite';
import { IconWrap, ImageContainer } from './ImageSection.style';
import { mainSwiperSettings, thumbSwiperSettings } from './ImageSection.data';
import { Details } from '../../types/model';

interface Props {
  images: Details['images'] | undefined;
}

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
