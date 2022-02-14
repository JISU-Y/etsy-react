import React from 'react';
import LazyLoad from 'react-lazyload';
import { CardDefaultProps } from '../../../../types';
import * as S from './CircleCard.style';

function CircleCard({ image, title }: CardDefaultProps) {
  return (
    <S.CardContainer>
      <LazyLoad once>
        <S.CardImgBox>
          <S.CardImg src={image} alt="circle-card" />
        </S.CardImgBox>
      </LazyLoad>
      <S.CardTitle>{title}</S.CardTitle>
    </S.CardContainer>
  );
}

export default CircleCard;
