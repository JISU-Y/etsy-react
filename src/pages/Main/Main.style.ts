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

export const CircleCategoryWrap = styled.div`
  display: flex;
  gap: 60px;
  padding: 9px;
  margin-bottom: 60px;
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
  padding: 0 36px;
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
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 18px;
  column-gap: 18px;
  margin: -50px 0 60px;
  & div {
    display: flex;
    justify-content: center;
  }
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

export const SelectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin-bottom: 90px;
  ${SectionTitle} {
    display: inline-block;
    cursor: pointer;
  }
  ${SectionTitle}::after {
    content: '->';
    margin-left: 10px;
    transition: all 0.3s ease-in;
  }
  ${SectionTitle}:hover::after {
    margin-left: 15px;
  }
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
