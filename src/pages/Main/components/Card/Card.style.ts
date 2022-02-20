import styled, { css } from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const FavoriteWrap = styled.div`
  /* Positioning */
  position: absolute;
  top: 15px;
  right: 18px;

  /* Other */
  opacity: 0;
  transform: translateY(10px);
  transition: ${TRANSITION.normal};
`;

export const CardContainer = styled.div`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  width: 270px;

  &:hover ${FavoriteWrap} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardWrap = styled.div`
  /* Display & Box Model */
  padding: 9px;
  border-radius: 10px;

  /* Color */
  background-color: transparent;

  /* Other */
  cursor: pointer;
  transition: box-shadow ${TRANSITION.slow};

  &:hover {
    box-shadow: 0 2px 18px ${COLORS.shadowGray};
    background-color: ${COLORS.white};
  }
`;

export const ProductImgBox = styled.div<{
  width: number | '100%';
  height: number | '100%';
}>`
  ${({ width, height }) => css`
    width: ${width === '100%' ? width : `${width}px`};
    height: ${height === '100%' ? height : `${height}px`};
  `}
`;

export const ProductImg = styled.img`
  /* Display & Box Model */
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const InfoP = styled.p``;

export const ItemInfo = styled.div`
  /* Display & Box Model */
  margin-top: 5px;

  /* Text */
  font-size: 16px;
  font-weight: bold;
`;

export const ReviewStars = styled.div`
  margin: 5px 0;
`;

export const ReviewCount = styled.span`
  /* Display & Box Model */
  margin-left: 3px;

  /* Color */
  color: ${COLORS.subFont};

  /* Text */
  font-size: 13px;
  font-weight: normal;
`;
