import styled, { css } from 'styled-components';

export const PicksContainer = styled.div`
  margin: -30px auto 0;
  max-width: 1400px;
  width: 100%;
`;

export const PicksWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 100px);
  grid-template-columns: repeat(4, 1fr);
  justify-items: stretch;
  grid-auto-flow: column;
  row-gap: 18px;
  column-gap: 18px;
`;

export const ImageCardWrapper = styled.div<{ index: number }>`
  display: block;
  width: 100%;
  height: 100%;
  & > div {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  ${({ index }) => css`
    grid-row-start: ${index < 4 ? 1 : index % 2 === 0 ? 3 : 4};
    grid-column-start: ${(index % 4) + 1};
    grid-row-end: ${index > 3 ? 6 : index % 2 === 0 ? 3 : 4};
    grid-column-end: ${(index % 4) + 2};
  `}
`;
