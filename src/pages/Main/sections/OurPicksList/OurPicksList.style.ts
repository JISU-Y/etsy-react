import styled from 'styled-components';

export const PicksContainer = styled.div`
  margin: -50px auto 60px;
  max-width: 1400px;
  width: 100%;
`;

export const PicksWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 100px);
  grid-template-columns: repeat(4, 1fr);
  justify-items: stretch;
  row-gap: 18px;
  column-gap: 18px;
`;

export const ImageCardWrapper = styled.div<{ index: number }>`
  display: block;
`;
