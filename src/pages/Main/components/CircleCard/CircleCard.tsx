import React from 'react';
import { CardDefaultProps } from '../../../../types';
import * as S from './CircleCard.style';

function CircleCard({ image, title }: CardDefaultProps) {
  return (
    <S.CardContainer>
      <S.CardImgBox>
        <S.CardImg src={image} alt="circle-card" />
      </S.CardImgBox>
      <S.CardTitle>{title}</S.CardTitle>
    </S.CardContainer>
  );
}

export default CircleCard;
