import styled from 'styled-components';

export const UniqueContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-bottom: 90px;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 18px;
  font-weight: 500;
`;

export const TabContents = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 18px;
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
  img {
    width: 100%;
    height: 100%;
  }
`;
