import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const CardContainer = styled.div`
  /* Display & Box Model */
  display: inline-block;
  width: 220px;
  border: 1px solid ${COLORS.border};
  border-radius: 10px;

  /* Other */
  cursor: pointer;
  overflow: hidden;
  transition: ${TRANSITION.normal};

  &:hover {
    box-shadow: 0 4px 20px ${COLORS.shadowGray};
  }
`;

export const CategoryImgBox = styled.div`
  height: 200px;
  overflow: hidden;
`;

export const CategoryImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CategoryTitle = styled.p`
  /* Display & Box Model */
  padding: 28px 0;

  /* Text */
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
