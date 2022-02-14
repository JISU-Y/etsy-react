import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 18px;
  font-weight: 500;
`;

export const SVGWrapper = styled.div`
  display: inline-block;
  transform: translateX(10px);
  transition: ${TRANSITION.slow};
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
  color: ${COLORS.subFont};
  margin-bottom: 18px;
`;

export const SelectionsWrap = styled.div`
  display: flex;
  gap: 18px;
`;
