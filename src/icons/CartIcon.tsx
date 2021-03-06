import React from 'react';
import { IconProps } from '../types';

const CartIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = 'black',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      stroke={color}
      fill={color}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="9" cy="20" r="2" />
      <circle cx="16" cy="20" r="2" />
      <path d="M21 5H5.665l-.687-3.21A1 1 0 0 0 4 1H1a1 1 0 0 0 0 2h2.191l2.831 13.21a.962.962 0 0 0 .064.159 1.015 1.015 0 0 0 .063.155.978.978 0 0 0 .133.153 1.006 1.006 0 0 0 .088.1 1 1 0 0 0 .185.105.975.975 0 0 0 .107.06A.994.994 0 0 0 7 17h11a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5Zm-2.244 5H16V7h3.656ZM7.819 15l-.6-3H9v3H7.819ZM11 12h3v3h-3v-3Zm0-2V7h3v3h-3ZM9 7v3H6.82l-.6-3H9Zm8.256 8H16v-3h2.156Z" />
    </svg>
  );
};

export default CartIcon;
