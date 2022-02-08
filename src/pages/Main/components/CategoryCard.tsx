import React from 'react';
import styled from 'styled-components';
import { CardDefaultProps } from './CircleCard';

function CategoryCard({ image, title }: CardDefaultProps) {
  return (
    <CardContainer>
      <img src={image} alt="category" />
      <p>{title}</p>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: inline-block;
  width: 250px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid lightgray;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  img {
    width: 250px;
    height: 200px;
  }
  p {
    font-size: 20px;
    font-weight: bold;
    padding: 28px 0;
    text-align: center;
  }
  &:hover {
    box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);
  }
`;

export default CategoryCard;
