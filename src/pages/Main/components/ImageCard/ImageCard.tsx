import React, { MouseEventHandler } from 'react';
import Favorite from '../../../../components/Favorite';
import { currency } from '../../../../constants/localeSetting';
import { padCentsDigits } from '../../../../utils/convertDigit';
import * as S from './ImageCard.style';
export interface ImageCardProps {
  image: string;
  width: number;
  height: number;
  price: number;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined; // ? 지우기 다른 곳도 onClick 추가
}

function ImageCard({ image, price, width, height, onClick }: ImageCardProps) {
  return (
    <S.ImgContainer onClick={onClick}>
      <S.CardImg src={image} alt="item" width={width} height={height} />
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
