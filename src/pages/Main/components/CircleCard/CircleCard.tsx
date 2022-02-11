import React from 'react';
import { CardDefaultProps } from '../../../../types';
import { CardContainer, CardImg, CardTitle } from './CircleCard.style';

function CircleCard({ image, title }: CardDefaultProps) {
  return (
    <CardContainer>
      <CardImg src={image} alt="circle-card" />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
}

export default CircleCard;
