import React from 'react';
import COLORS from '../styles/colors';
import { IconProps } from '../types';

const Bracket: React.FC<IconProps> = ({
  width = 96,
  height = 96,
  color = COLORS.white,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      aria-hidden="true"
    >
      <path d="m12 15.414-4.707-4.707a1 1 0 1 1 1.414-1.414L12 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
};

export default Bracket;
