import React from 'react';
import styled from 'styled-components';
import Favorite from '../../../components/Favorite';
import { currency } from '../../../constants/localeSetting';
import { padCentsDigits } from '../../../utils/convertDigit';

interface CardProps {
  width: number;
  height: number;
  title: string;
  reviewCount: number;
  price: number;
  image: string;
}

const Card = ({ ...props }: CardProps) => {
  const { title, reviewCount, price, image } = props;
  console.log(price.toString().split('.')[1].length === 1);

  return (
    <CardContainer>
      <CardWrap {...props}>
        <img src={image} alt="item" />
        <ItemInfo>
          <p>{title.length > 60 ? `${title.slice(0, 59)}...` : title}</p>
          <div>
            ⭐⭐⭐⭐⭐ <span>({reviewCount.toLocaleString()})</span>
          </div>
          <p>
            {currency} {padCentsDigits(price)}
          </p>
        </ItemInfo>
      </CardWrap>
      <FavoriteWrap>
        <Favorite size="small" />
      </FavoriteWrap>
    </CardContainer>
  );
};

const FavoriteWrap = styled.div`
  position: absolute;
  top: 15px;
  right: 18px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.2s ease-in-out;
`;

const CardContainer = styled.div`
  width: 270px;
  position: relative;
  &:hover ${FavoriteWrap} {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardWrap = styled.div<CardProps>`
  padding: 9px;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  img {
    border-radius: 5px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
  }
  &:hover {
    box-shadow: 0 2px 18px rgba(34, 34, 34, 0.2);
    background-color: white;
  }
`;

const ItemInfo = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  div {
    margin: 3px 0;
    span {
      font-size: 13px;
      font-weight: normal;
      color: gray;
    }
  }
`;

export default Card;
