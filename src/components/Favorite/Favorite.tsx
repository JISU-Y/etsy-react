import React from 'react';
import styled, { css } from 'styled-components';
import HeartIcon from '../../icons/HeartIcon';
import COLORS from '../../styles/colors';
import TRANSITION from '../../styles/transition';

interface IFavorite {
  size: 'small' | 'large';
}

function Favorite({ size }: IFavorite) {
  const [width, height] = size === 'small' ? [18, 18] : [24, 24];

  return (
    <Heart size={size}>
      <HeartIcon width={width} height={height} color="black" />
    </Heart>
  );
}

const Heart = styled.div<{ size: 'small' | 'large' }>`
  ${({ size }) => css`
    width: ${size === 'small' ? '30px' : '42px'};
    height: ${size === 'small' ? '30px' : '42px'};
  `};
  background-color: ${COLORS.white};
  border-radius: 50%;
  text-align: center;
  border: 1px solid ${COLORS.border};
  transform: scale(1);
  transition: ${TRANSITION.normal};
  display: flex;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
  svg {
    margin: auto;
  }
`;

export default Favorite;
