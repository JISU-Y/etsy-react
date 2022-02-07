import React from 'react';

interface Props {
  width: string | number;
  height: string | number;
  color: string;
}

const HeartIcon: React.FC<Props> = ({
  width = 18,
  height = 18,
  color = 'black',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      stroke={color}
      viewBox="0 0 24 24"
      strokeWidth="0.5"
      aria-hidden="true"
    >
      <path d="M12 21C10.349 21 2 14.688 2 9c0-3.421 2.364-6 5.5-6A6.912 6.912 0 0 1 12 5.051 6.953 6.953 0 0 1 16.5 3C19.636 3 22 5.579 22 9c0 5.688-8.349 12-10 12ZM7.5 5C5.472 5 4 6.683 4 9c0 4.108 6.432 9.325 8 10 1.564-.657 8-5.832 8-10 0-2.317-1.472-4-3.5-4-1.979 0-3.7 2.105-3.721 2.127l-.788.973-.775-.98C11.186 7.083 9.5 5 7.5 5Z" />
    </svg>
  );
};

export default HeartIcon;
