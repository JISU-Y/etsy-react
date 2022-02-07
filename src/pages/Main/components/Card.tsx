import React from 'react';
import styled, { css } from 'styled-components';
import Favorite from '../../../components/Favorite';
import { currency } from '../../../constants/localeSetting';
import { padCentsDigits } from '../../../utils/convertDigit';
import { ImageCardProps } from './ImageCard';
import StarIcon from '../../../icons/StarIcon';

interface CardProps extends ImageCardProps {
  title: string;
  reviewCount: number;
}

function Card({ title, reviewCount, price, image, ...props }: CardProps) {
  return (
    <CardContainer>
      <CardWrap {...props}>
        <img src={image} alt="item" />
        <ItemInfo>
          <p>{title.length > 60 ? `${title.slice(0, 59)}...` : title}</p>
          <div>
            {[1, 2, 3, 4, 5].map(el => (
              <StarIcon key={el} width={12} height={12} color="black" />
            ))}
            <span>({reviewCount.toLocaleString()})</span>
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
}

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

const CardWrap = styled.div<{ width: number; height: number }>`
  padding: 9px;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  ${({ width, height }) => css`
    img {
      border-radius: 5px;
      width: ${width}px;
      height: ${height}px;
    }
  `}
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
    margin: 5px 0;
    span {
      font-size: 13px;
      font-weight: normal;
      color: gray;
      margin-left: 3px;
    }
  }
`;

export default Card;
