import styled, { css } from 'styled-components';

export const FavoriteWrap = styled.div`
  position: absolute;
  top: 15px;
  right: 18px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.2s ease-in-out;
`;

export const CardContainer = styled.div`
  width: 270px;
  position: relative;
  &:hover ${FavoriteWrap} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardWrap = styled.div`
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  padding: 9px;
  &:hover {
    box-shadow: 0 2px 18px rgba(34, 34, 34, 0.2);
    background-color: white;
  }
`;

export const ProductImg = styled.img<{ width: number; height: number }>`
  border-radius: 5px;
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;

export const InfoP = styled.p``;

export const ItemInfo = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ReviewStars = styled.div`
  margin: 5px 0;
`;

export const ReviewCount = styled.span`
  font-size: 13px;
  font-weight: normal;
  color: gray;
  margin-left: 3px;
`;
