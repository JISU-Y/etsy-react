import React, { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import Favorite from '../../../components/Favorite';
import { currency } from '../../../constants/localeSetting';
import { padCentsDigits } from '../../../utils/convertDigit';
export interface ImageCardProps {
  image: string;
  width: number;
  height: number;
  price: number;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined; // ? 지우기 다른 곳도 onClick 추가
}

function ImageCard({ image, price, width, height, onClick }: ImageCardProps) {
  return (
    <ImgContainer {...{ width, height }} onClick={onClick}>
      <img src={image} alt="item" />
      <FavoriteWrap>
        <Favorite size="small" />
      </FavoriteWrap>
      <PriceTag>
        {currency} {padCentsDigits(price)}
      </PriceTag>
    </ImgContainer>
  );
}

const FavoriteWrap = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.2s ease-in-out;
`;

const ImgContainer = styled.div<{ width: number; height: number }>`
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  ${({ width, height }) => css`
    img {
      width: ${width}px;
      height: ${height}px;
    }
  `}
  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  }
  &:hover > ${FavoriteWrap} {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PriceTag = styled.div`
  position: absolute;
  bottom: 8px;
  left: 6px;
  padding: 6px 9px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #c4c4c4;
  font-size: 13px;
  font-weight: 500;
`;
export default ImageCard;
