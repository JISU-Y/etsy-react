import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const CardImgBox = styled.div`
  width: 114px;
  height: 114px;
  border-radius: 50%;
  margin: 12px 0;
  transform: scale(1);
  transition: ${TRANSITION.normal};
  box-shadow: 0 4px 18px ${COLORS.shadowGray};
  overflow: hidden;
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  padding-bottom: 10px;
  border-bottom: solid 2px transparent;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 114px;
  cursor: pointer;
  &:hover ${CardImgBox} {
    transform: scale(1.08);
  }
  &:hover ${CardTitle} {
    color: ${COLORS.subFont};
    border-bottom: solid 2px ${COLORS.subFont};
  }
`;
