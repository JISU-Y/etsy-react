import React from 'react';
import { CardDefaultProps } from '../../../../types';
import * as S from './CategoryCard.style';

function CategoryCard({ image, title }: CardDefaultProps) {
  return (
    <S.CardContainer>
      <S.CategoryImg src={image} alt="category" />
      <S.CategoryTitle>{title}</S.CategoryTitle>
    </S.CardContainer>
  );
}

export default CategoryCard;
