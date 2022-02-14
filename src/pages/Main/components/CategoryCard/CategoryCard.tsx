import React from 'react';
import LazyLoad from 'react-lazyload';
import { CardDefaultProps } from '../../../../types';
import * as S from './CategoryCard.style';

function CategoryCard({ image, title }: CardDefaultProps) {
  return (
    <S.CardContainer>
      <LazyLoad once>
        <S.CategoryImgBox>
          <S.CategoryImg src={image} alt="category" />
        </S.CategoryImgBox>
      </LazyLoad>
      <S.CategoryTitle>{title}</S.CategoryTitle>
    </S.CardContainer>
  );
}

export default CategoryCard;
