import styled from 'styled-components';

export const TopTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  margin: 30px 0 18px;
`;

export const CircleCategoryContainer = styled.div<{
  bgColor: 'white' | 'mint';
}>`
  width: 100%;
  background-color: ${props => (props.bgColor === 'mint' ? '#ddebe3' : '#fff')};
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
