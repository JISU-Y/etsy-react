import React, { MouseEventHandler } from 'react';
import Favorite from '../../../../components/Favorite';
import { currency } from '../../../../constants/localeSetting';
import { padCentsDigits } from '../../../../utils/convertDigit';
import {
  CardImg,
  FavoriteWrap,
  ImgContainer,
  PriceTag,
} from './ImageCard.style';
export interface ImageCardProps {
  image: string;
  width: number;
  height: number;
  price: number;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined; // ? 지우기 다른 곳도 onClick 추가
}

function ImageCard({ image, price, width, height, onClick }: ImageCardProps) {
  return (
    <ImgContainer onClick={onClick}>
      <CardImg src={image} alt="item" width={width} height={height} />
      <FavoriteWrap>
        <Favorite size="small" />
      </FavoriteWrap>
      <PriceTag>
        {currency} {padCentsDigits(price)}
      </PriceTag>
    </ImgContainer>
  );
}

export default ImageCard;
