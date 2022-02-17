import styled from 'styled-components';
import COLORS from '../../../../styles/colors';

export const TopTitle = styled.h1`
  /* Display & Box Model */
  margin: 30px 0 18px;

  /* Text */
  font-size: 40px;
  text-align: center;
`;

export const CircleCategoryContainer = styled.div<{
  bgColor: 'white' | 'mint';
}>`
  /* Display & Box Model */
  display: flex;
  width: 100%;
  height: 200px;
  margin-bottom: 150px;

  /* Color */
  background-color: ${props =>
    props.bgColor === 'mint' ? COLORS.mint : COLORS.white};
`;

export const CircleCategoryWrap = styled.div`
  width: 1400px;
  padding: 9px;
  margin: auto;
  margin-bottom: 60px;
`;

export const CircleCardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;
