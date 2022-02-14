import React from 'react';
import LazyLoad from 'react-lazyload';
import Favorite from '../../../../components/Favorite';
import { currency } from '../../../../constants/localeSetting';
import { padCentsDigits } from '../../../../utils/convertDigit';
import * as S from './ImageCard.style';
export interface ImageCardProps {
  image: string;
  width: number;
  height: number;
  price: number;
  onClick?: () => void;
}

function ImageCard({ image, price, width, height, onClick }: ImageCardProps) {
  return (
    <S.ImgContainer onClick={onClick}>
      <LazyLoad once>
        <S.CardImgBox width={width} height={height}>
          <S.CardImg src={image} alt="item" />
        </S.CardImgBox>
      </LazyLoad>
      <S.FavoriteWrap>
        <Favorite size="small" />
      </S.FavoriteWrap>
      <S.PriceTag>
        {currency} {padCentsDigits(price)}
      </S.PriceTag>
    </S.ImgContainer>
  );
}

export default ImageCard;
