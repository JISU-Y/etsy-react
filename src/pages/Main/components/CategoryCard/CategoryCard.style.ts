import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const CardContainer = styled.div`
  display: inline-block;
  width: 220px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${COLORS.border};
  cursor: pointer;
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
  font-size: 20px;
  font-weight: bold;
  padding: 28px 0;
  text-align: center;
`;
