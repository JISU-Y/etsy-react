import React from 'react';
import { CardDefaultProps } from '../../../../types';
import {
  CardContainer,
  CategoryImg,
  CategoryTitle,
} from './CategoryCard.style';

function CategoryCard({ image, title }: CardDefaultProps) {
  return (
    <CardContainer>
      <CategoryImg src={image} alt="category" />
      <CategoryTitle>{title}</CategoryTitle>
    </CardContainer>
  );
}

export default CategoryCard;
