import React from 'react';
import styled, { css } from 'styled-components';
import HeartIcon from '../icons/HeartIcon';

interface FavoriteProps {
  size: 'small' | 'large';
}

function Favorite({ size }: FavoriteProps) {
  const [width, height] = size === 'small' ? [18, 18] : [24, 24];

  return (
    <Heart {...{ size }}>
      <HeartIcon width={width} height={height} color="black" />
    </Heart>
  );
}

const Heart = styled.div<{ size: 'small' | 'large' }>`
  ${({ size }) => css`
    width: ${size === 'small' ? '30px' : '42px'};
    height: ${size === 'small' ? '30px' : '42px'};
  `};
  background-color: white;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #c4c4c4;
  transform: scale(1);
  transition: all 0.2s linear;
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
