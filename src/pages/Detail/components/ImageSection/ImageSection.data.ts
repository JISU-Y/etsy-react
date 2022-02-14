import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper';

export const swiperSettingType = {
  effectType: 'fade',
  slidesPerView: 'auto',
  direction: 'vertical',
} as const;

export const thumbSwiperSettings = {
  spaceBetween: 10,
  slidesPerView: swiperSettingType.slidesPerView,
  watchSlidesProgress: true,
  modules: [Navigation, Thumbs],
  direction: swiperSettingType.direction,
};

export const mainSwiperSettings = {
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
  initialSlide: 0,
};
