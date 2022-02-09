import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import SwiperCore from 'swiper';

import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';
import { getProductDetails } from '../../utils/axios';
import Favorite from '../../components/Favorite';

interface DetailsProps {
  id: number;
  images: string[];
  title: string;
  sold: number;
  provider: string;
  etsyPick: boolean;
  price: number;
  discount: number;
  finishOptions: string[];
  lengthOptions: number[];
  personalization: string;
  details: string[];
  quickDelivery: boolean;
}

// const settings_swiper

export default function Detail() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperCore>();
  const [images, setImages] = React.useState<string[]>([]);
  const {
    state: { id },
  } = useLocation<{ id: number }>();

  const { data } = useSWR('productDetails.json', url => getProductDetails(url));

  React.useEffect(() => {
    console.log(data?.data.data.filter((el: { id: number }) => el.id === id));
    setImages(
      data?.data.data.filter((el: { id: number }) => el.id === id)[0].images
    );
  }, [data?.data.data, id]);

  if (!data) return <div>...loading</div>;

  return (
    <Container>
      <ImageContainer>
        <IconWrap>
          <Favorite size="large" />
        </IconWrap>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={images?.length + 1}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          direction="vertical"
          className="mySwiper"
        >
          {images?.map((imageUrl: string, index: number) => (
            <SwiperSlide key={imageUrl}>
              <img src={imageUrl} alt={`preview${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          loop={true}
          spaceBetween={5}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          navigation={true}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          speed={2000}
          className="mySwiper2"
        >
          {images?.map((imageUrl: string, index: number) => (
            <SwiperSlide key={imageUrl}>
              <img src={imageUrl} alt={`preview${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageContainer>
    </Container>
  );
}

const Container = styled.div``;

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
      margin: 5px 0;
      cursor: pointer;
    }
    .swiper-wrapper {
      height: auto;
      flex-direction: column;
    }
    .swiper-slide {
      height: 60px;
    }
  }
`;

const IconWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
`;
