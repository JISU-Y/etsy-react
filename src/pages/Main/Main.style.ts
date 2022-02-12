import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  margin: 30px 0 18px;
`;

export const CircleCategoryContainer = styled.div`
  width: 100%;
  background-color: #ddebe3;
  display: flex;
  height: 200px;
  margin-bottom: 150px;
`;

export const CircleCategoryWrap = styled.div`
  padding: 9px;
  margin: auto;
  margin-bottom: 60px;
  width: 1400px;
`;

export const CircleCardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const RecentListWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1400px;
  gap: 18px;
  margin-bottom: 30px;
`;

export const RecentTitle = styled.div`
  display: flexbox;
  justify-content: space-between;
  width: 100%;
  padding: 0 40px;
`;

export const RecentLeft = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const RecentRight = styled.span`
  font-size: 13px;
  color: gray;
`;

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

export const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 18px;
  font-weight: 500;
`;

export const PopularContainer = styled.div`
  max-width: 1400px;
  margin-bottom: 90px;
`;

export const PopularBox = styled.div`
  display: flex;
`;

export const UniqueContainer = styled.div`
  max-width: 1400px;
  margin-bottom: 90px;
`;

export const TabContents = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;

export const SVGWrapper = styled.div`
  display: inline-block;
  transform: translateX(10px);
  transition: all 0.3s ease-in;
  margin-top: 5px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 18px;
  width: fit-content;
  display: flex;
  align-items: center;
  ${SectionTitle} {
    display: inline-block;
    cursor: pointer;
    margin-bottom: 0;
  }
  &:hover ${SVGWrapper} {
    transform: translateX(15px);
  }
`;

export const SelectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin-bottom: 90px;
`;

export const SectionDesc = styled.p`
  font-size: 16px;
  color: gray;
  margin-bottom: 18px;
`;

export const SelectionsWrap = styled.div`
  display: flex;
  gap: 18px;
`;
