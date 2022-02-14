import styled, { css } from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const FavoriteWrap = styled.div`
  position: absolute;
  top: 15px;
  right: 18px;
  opacity: 0;
  transform: translateY(10px);
  transition: ${TRANSITION.normal};
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
  transition: box-shadow ${TRANSITION.slow};
  padding: 9px;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 2px 18px ${COLORS.shadowGray};
    background-color: ${COLORS.white};
  }
`;

export const ProductImgBox = styled.div<{ width: number; height: number }>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;

export const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
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
  color: ${COLORS.subFont};
  margin-left: 3px;
`;
