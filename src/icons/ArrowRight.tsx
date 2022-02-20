import React from 'react';
import { IconProps } from '../types';

const ArrowRight: React.FC<IconProps> = ({
  width = 80,
  height = 40,
  color = 'black',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 12 24"
    >
      <path d="m11.3 12.7.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L8.2 11H1c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z" />
    </svg>
  );
};

export default ArrowRight;
