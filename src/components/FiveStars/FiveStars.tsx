import React from 'react';
import styled from 'styled-components';
import StarIcon from '../../icons/StarIcon';

interface Props {
  width: number;
  height: number;
  color: string;
  gap: number;
}

function FiveStars({ width, height, color, gap }: Props) {
  return (
    <Container gap={gap}>
      {Array.from([1, 2, 3, 4, 5], el => (
        <StarIcon key={el} width={width} height={height} color={color} />
      ))}
    </Container>
  );
}

const Container = styled.div<{ gap: number }>`
  /* Display & Box Model */
  display: flex;
  gap: ${({ gap }) => gap}px;
`;

export default FiveStars;
