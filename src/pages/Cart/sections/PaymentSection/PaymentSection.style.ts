import styled from 'styled-components';
import COLORS from '../../../../styles/colors';
import TRANSITION from '../../../../styles/transition';

export const Container = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  min-width: 280px;
  flex-basis: calc(100% / 3);
  padding: 18px;
  margin-left: 24px;
  border-radius: 18px;
  box-shadow: 0 4px 20px ${COLORS.shadowGray};

  /* Other */
  overflow: hidden;
`;

export const Divide = styled.hr`
  width: 100%;
`;

export const LineDiv = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  /* Font */
  font-size: 16px;
  line-height: 24px;
`;

export const SectionTitle = styled.h3`
  /* Font */
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const ContentsText = styled.p``;

export const RadioWrapper = styled.div`
  margin-top: 10px;
`;

export const RadioBox = styled.div`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: block;
  margin-bottom: 12px;

  /* Font */
  font-size: 22px;
  font-weight: bold;

  /* Other */
  cursor: pointer;
`;

export const RadioCheckMark = styled.label`
  /* Positioning */
  position: absolute;
  top: 0;
  left: 0;

  /* Display & Box Model */
  width: 25px;
  height: 25px;
  border: 2px solid ${COLORS.subFont};
  border-radius: 50%;

  /* Color */
  background-color: ${COLORS.white};

  /* Other */
  cursor: pointer;
  &::after {
    content: '';
    /* Positioning */
    position: absolute;
    top: 50%;
    left: 50%;

    /* Display & Box Model */
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;

    /* Color */
    background-color: ${COLORS.white};

    /* Other */
    z-index: 2;
    transform: translate(-50%, -50%);
  }
`;

export const Radio = styled.input`
  /* Positioning */
  position: absolute;

  /* Display & Box Model */
  height: 0;
  width: 0;

  /* Other */
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${RadioCheckMark} {
    border: none;
    background-color: ${COLORS.mainFont};
  }
`;

export const RadioLabel = styled.span`
  /* Display & Box Model */
  margin-left: 30px;
`;

export const ShippingLocation = styled.span`
  /* Color */
  color: ${COLORS.subFont};

  /* Font */
  font-size: 14px;
  line-height: 18px;

  & > span {
    /* Font */
    text-decoration: underline;

    /* Other */
    transition: ${TRANSITION.normal};
    cursor: pointer;
  }
  & > span:hover {
    color: ${COLORS.border};
  }
`;

export const SizeButtonWrapper = styled.div`
  /* Display & Box Model */
  margin: 5px 0;
`;

export const BgButtonWrapper = styled.div`
  /* Display & Box Model */
  margin: 5px 0 5px -15px;
`;

export const CodeSpan = styled.span`
  /* Font */
  font-size: 13px;
  font-weight: bold;
`;

export const BottomBox = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BottomNoti = styled.p`
  /* Color */
  color: ${COLORS.subFont};

  /* Font */
  font-size: 14px;
  text-align: center;

  & > span {
    /* Font */
    text-decoration: underline;

    /* Other */
    transition: ${TRANSITION.normal};
    cursor: pointer;
  }
  & > span:hover {
    color: ${COLORS.border};
  }
`;
