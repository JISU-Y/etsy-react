import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const SectionTitle = styled.h2`
  /* Display & Box Model */
  margin-bottom: 18px;

  /* Text */
  font-size: 28px;
  font-weight: 500;
`;

export const SVGWrapper = styled.div`
  /* Display & Box Model */
  display: inline-block;
  margin-top: 5px;

  /* Other */
  transform: translateX(10px);
  transition: ${TRANSITION.slow};
`;

export const TitleWrapper = styled.div`
  /* Display & Box Model */
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 18px;

  ${SectionTitle} {
    /* Display & Box Model */
    display: inline-block;
    margin-bottom: 0;

    /* Other */
    cursor: pointer;
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
  /* Display & Box Model */
  margin-bottom: 18px;

  /* Color */
  color: ${COLORS.subFont};

  /* Text */
  font-size: 16px;
`;

export const SelectionsWrap = styled.div`
  display: flex;
  gap: 18px;
`;
