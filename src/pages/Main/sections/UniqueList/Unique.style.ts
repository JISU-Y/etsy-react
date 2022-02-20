import styled, { css } from 'styled-components';
export const gridIndex = ['one', 'two', 'three', 'four', 'five', 'six'];

export const UniqueContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-bottom: 90px;
`;

export const SectionTitle = styled.h2`
  /* Display & Box Model */
  margin-bottom: 18px;

  /* Text */
  font-size: 28px;
  font-weight: 500;
`;

export const TabContents = styled.div`
  /* Display & Box Model */
  display: flex;
  gap: 18px;
  margin-top: 18px;

  /* Other */
  transform: translateX(-10px);
  transition: all 0.2s ease-in-out;
`;

export const ImageCardWrapper = styled.div<{ index: number }>`
  display: block;
  width: 100%;
  height: 100%;
  & > div {
    width: 100%;
    height: 100%;
  }
  ${({ index }) => css`
    &.${gridIndex[index]} {
      grid-area: ${gridIndex[index]};
    }
  `}
`;
