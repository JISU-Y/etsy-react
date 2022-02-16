import React from 'react';
import Favorite from '../../../../components/Favorite';
import { currency } from '../../../../constants/localeSetting';
import { padCentsDigits } from '../../../../utils/convertDigit';
import { ImageCardProps } from '../ImageCard/ImageCard';
import * as S from './Card.style';
import FiveStars from '../../../../components/FiveStars';

interface CardProps extends ImageCardProps {
  title: string;
  reviewCount: number;
}

function Card({ title, reviewCount, price, image, width, height }: CardProps) {
  const infoTitle = title.length > 60 ? `${title.slice(0, 59)}...` : title;

  return (
    <S.CardContainer>
      <S.CardWrap>
        <S.ProductImgBox width={width} height={height}>
          <S.ProductImg src={image} alt="item" />
        </S.ProductImgBox>
        <S.ItemInfo>
          <S.InfoP>{infoTitle}</S.InfoP>
          <S.ReviewStars>
            <FiveStars width={12} height={12} color="black" gap={1} />
            <S.ReviewCount>({reviewCount.toLocaleString()})</S.ReviewCount>
          </S.ReviewStars>
          <S.InfoP>
            {currency} {padCentsDigits(price)}
          </S.InfoP>
        </S.ItemInfo>
      </S.CardWrap>
      <S.FavoriteWrap>
        <Favorite size="small" />
      </S.FavoriteWrap>
    </S.CardContainer>
  );
}

export default Card;
