import styled, { css } from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const FavoriteWrap = styled.div`
  /* Positioning */
  position: absolute;
  top: 6px;
  right: 6px;

  /* Other */
  opacity: 0;
  transform: translateY(10px);
  transition: ${TRANSITION.normal};
`;

export const ImgContainer = styled.div`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: inline-block;
  border-radius: 5px;

  /* Other */
  cursor: pointer;
  overflow: hidden;
  transition: ${TRANSITION.normal};

  &:hover {
    box-shadow: 0 0 8px 0 ${COLORS.shadowGray};
  }
  &:hover > ${FavoriteWrap} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardImgBox = styled.div<{
  width: number | '100%';
  height: number | '100%';
}>`
  ${({ width, height }) => css`
    width: ${width === '100%' ? width : `${width}px`};
    height: ${height === '100%' ? height : `${height}px`};
  `}
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const PriceTag = styled.div`
  /* Positioning */
  position: absolute;
  bottom: 8px;
  left: 6px;

  /* Display & Box Model */
  padding: 6px 9px;
  border: 1px solid #c4c4c4;
  border-radius: 15px;

  /* Color */
  background-color: ${COLORS.white};

  /* Text */
  font-size: 13px;
  font-weight: 500;
`;
