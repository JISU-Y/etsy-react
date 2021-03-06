import React from 'react';
import { IconProps } from '../types';

const HeartIcon: React.FC<IconProps> = ({
  width = 14,
  height = 14,
  color = 'black',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      stroke={color}
      viewBox="3 3 18 18"
      aria-hidden="true"
    >
      <path d="M19.985 10.36a.5.5 0 0 0-.477-.352h-5.351l-1.669-5.642a.5.5 0 0 0-.962 0l-1.67 5.642H4.5a.5.5 0 0 0-.279.911l4.309 3.072-1.5 5.328a.5.5 0 0 0 .741.6l4.231-2.935 4.215 2.935a.5.5 0 0 0 .743-.6l-1.484-5.328 4.306-3.074a.5.5 0 0 0 .203-.557Z" />
    </svg>
  );
};

export default HeartIcon;
