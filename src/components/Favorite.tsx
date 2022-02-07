import React from 'react';
import styled from 'styled-components';
// import { ReactComponent as Heart } from '../assets/icons/Heart.svg';

interface FavoriteProps {
  size: 'small' | 'large';
}

function Favorite({ ...props }: FavoriteProps) {
  return (
    <Heart {...props}>
      <i>❤</i>
    </Heart>
  );
}

const Heart = styled.div<FavoriteProps>`
  width: ${props => (props.size === 'small' ? '30px' : '42px')};
  height: ${props => (props.size === 'small' ? '30px' : '42px')};
  background-color: white;
  border-radius: 50%;
  text-align: center;
  line-height: ${props => (props.size === 'small' ? '30px' : '42px')};
  border: 1px solid #c4c4c4;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    width: ${props => (props.size === 'small' ? '31px' : '43.5px')};
    height: ${props => (props.size === 'small' ? '31px' : '43.5px')};
  }
  i {
    font-size: ${props => (props.size === 'small' ? '18px' : '24px')};
  }
`;

export default Favorite;
