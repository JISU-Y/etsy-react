import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const CardImgBox = styled.div`
  /* Display & Box Model */
  width: 114px;
  height: 114px;
  margin: 12px 0;
  border-radius: 50%;
  box-shadow: 0 4px 18px ${COLORS.shadowGray};

  /* Other */
  transform: scale(1);
  transition: ${TRANSITION.normal};
  overflow: hidden;
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const CardTitle = styled.p`
  /* Display & Box Model */
  padding-bottom: 10px;
  border-bottom: solid 2px transparent;

  /* Text */
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
`;

export const CardContainer = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 114px;

  /* Other */
  cursor: pointer;
  &:hover ${CardImgBox} {
    transform: scale(1.08);
  }
  &:hover ${CardTitle} {
    border-bottom: solid 2px ${COLORS.subFont};
    color: ${COLORS.subFont};
  }
`;
