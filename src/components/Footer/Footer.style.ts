import styled, { css } from 'styled-components';
import COLORS from '../../styles/colors';
import TRANSITION from '../../styles/transition';
import zIndex from '../../styles/zIndex';

export const FooterContainer = styled.div`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  width: 100%;

  /* Color */
  background-color: ${COLORS.beige};

  svg {
    width: 100%;
  }
`;

export const SVGWrapper = styled.div<{
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}>`
  /* Positioning */
  position: absolute;
  ${({ top, left, bottom, right }) => css`
    top: ${top}px;
    left: ${left}px;
    bottom: ${bottom}px;
    right: ${right}px;
  `}

  /* Display & Box Model */
  width: 100%;
`;

export const AboutWrapper = styled.div`
  /* Display & Box Model */
  max-width: 1400px;
  margin: auto;
  margin-top: 50px;
`;

export const About = styled.div`
  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 54px;
`;

export const AboutTitle = styled.h1`
  /* Text */
  font-size: 44px;
  line-height: 48px;
`;

export const AboutLink = styled.p`
  /* Display & Box Model */
  margin-top: 10px;

  /* Color */
  color: ${COLORS.mainFont};

  /* Text */
  font-size: 14px;
  text-decoration: underline;
  text-align: center;

  /* Other */
  cursor: pointer;
  transition: ${TRANSITION.normal};

  &:hover {
    color: ${COLORS.subFont};
  }
`;

export const AboutList = styled.div`
  /* Display & Box Model */
  display: flex;
  margin: 36px 0 42px;
`;

export const AboutListContent = styled.div`
  /* Display & Box Model */
  flex: 1;
  margin: 10px;
`;

export const ContentTitle = styled.h2`
  /* Display & Box Model */
  padding: 0;
  margin-bottom: 18px;

  /* Text */
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
`;

export const ContentParagraph = styled.div`
  /* Text */
  font-size: 16px;
  line-height: 28px;
`;

export const ContentMoreSpan = styled.span`
  /* Display & Box Model */
  border-bottom: 2px dashed black;

  /* Other */
  cursor: help;

  &:hover ~ .tooltip {
    /* Display & Box Model */
    display: inline-block;

    /* Other */
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;
  }
`;

export const ToolTipUl = styled.ul`
  /* Display & Box Model */
  padding: 9px;
  padding-left: 18px;
`;

export const ToolTipLi = styled.li`
  /* Text */
  font-size: 14px;

  /* Other */
  list-style: disc;
`;

export const AboutFootTitle = styled.h3`
  /* Display & Box Model */
  margin-bottom: 20px;

  /* Text */
  font-size: 21px;
  font-weight: bold;
`;

export const Subscribe = styled.div`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  margin-top: 50px;

  /* Color */
  background-color: #d7e6f5;
`;

export const SubscribeTitle = styled.h4`
  /* Display & Box Model */
  margin-bottom: 20px;

  /* Text */
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const SubscribeForm = styled.form`
  /* Display & Box Model */
  display: flex;
  width: 100%;
  height: 48px;
  max-width: 480px;
  border-radius: 50px;
  border: 1px solid ${COLORS.border};
  margin-bottom: 50px;
  box-shadow: 1px 2px 4px 0 ${COLORS.shadowGray} inset;

  /* Other */
  overflow: hidden;
  transition: ${TRANSITION.normal};

  &:hover {
    border: 1px solid ${COLORS.subFont};
  }
`;

export const SubscribeButton = styled.button`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  width: fit-content;
  padding: 0 15px;
  border: none;

  /* Color */
  background: ${COLORS.backgroundGray};
  color: ${COLORS.mainFont};

  /* Text */
  font-size: 16px;
  font-weight: bold;

  /* Other */
  cursor: pointer;

  &::after {
    content: '';
    /* Positioning */
    position: absolute;
    top: 0;
    left: 0;

    /* Display & Box Model */
    width: 100%;
    height: 100%;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;

    /* Text */
    font-size: 16px;
    line-height: 46px;

    /* Other */
    transform: scale(0.85);
    transition: ${TRANSITION.quick};
    z-index: ${zIndex.base};
  }
  &::before {
    content: '';
    /* Positioning */
    position: absolute;
    top: 0;
    left: 0;

    /* Display & Box Model */
    width: 100%;
    height: 100%;

    /* Color */
    color: ${COLORS.white};

    /* Text */
    font-size: 16px;
    line-height: 46px;

    /* Other */
    z-index: ${zIndex.base + 1};
  }
  &:hover::after {
    /* Color */
    background-color: ${COLORS.darkGray};
    color: ${COLORS.white};

    /* Other */
    transform: scale(1);
  }
  &:hover::before {
    content: 'Subscribe';
    color: ${COLORS.white};
  }
`;

export const Input = styled.input`
  /* Display & Box Model */
  width: 100%;
  padding: 10px 0 10px 20px;
  border: none;
  outline: none;

  /* Color */
  background: ${COLORS.backgroundGray};

  /* Text */
  font-size: 16px;

  &:focus ~ ${SubscribeButton}::after {
    /* Color */
    background-color: ${COLORS.darkGray};
    color: ${COLORS.white};

    /* Other */
    transform: scale(1);
  }
  &:focus ~ ${SubscribeButton}::before {
    content: 'Subscribe';
    color: ${COLORS.white};
  }
`;

export const SubscribeFooter = styled.div`
  /* Display & Box Model */
  width: 100%;
  padding-bottom: 30px;

  /* Color */
  background-color: ${COLORS.mediumBlue};
`;

export const SubscribeFooterInfo = styled.div`
  /* Display & Box Model */
  display: flex;
  width: fit-content;
  margin: 90px auto 0;

  /* Color */
  color: #fff;
  svg {
    width: fit-content;
  }
`;

export const SubscribeFooterSpan = styled.span`
  /* Display & Box Model */
  width: 100%;
  margin-left: 10px;
  border-bottom: 2px dashed #fff;

  /* Text */
  font-size: 16px;
  line-height: 28px;

  /* Other */
  cursor: help;
`;

export const Guides = styled.div`
  /* Display & Box Model */
  display: flex;
  padding: 36px 24px;

  /* Color */
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
`;

export const GuidesWrapper = styled.div`
  /* Display & Box Model */
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: auto;
`;

export const GuidesBox = styled.div`
  /* Display & Box Model */
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const GuidesBoxTitle = styled.h4`
  /* Display & Box Model */
  margin-bottom: 15px;

  /* Text */
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const GuidesBoxContents = styled.ul`
  /* Text */
  font-size: 13px;
`;

export const Guide = styled.li`
  /* Display & Box Model */
  width: fit-content;
  margin-bottom: 10px;

  /* Other */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const HelpBox = styled.div`
  /* Display & Box Model */
  padding: 24px 0;
`;

export const DownloadButton = styled.button`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  min-height: 36px;
  padding: 5px 15px;
  border: none;

  /* Color */
  background: transparent;
  color: ${COLORS.white};
  /* Text */
  font-weight: bold;

  /* Other */
  cursor: pointer;
  &::after {
    content: '';
    /* Positioning */
    position: absolute;
    top: 50%;
    left: 50%;

    /* Display & Box Model */
    width: 100%;
    min-height: 36px;
    border-radius: 36px;
    border: 2px solid #fff;

    /* Other */
    transform: translate(-50%, -50%) scale(1);
    transition: ${TRANSITION.normal};
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

export const IconsBox = styled.div`
  /* Display & Box Model */
  display: flex;
  margin-top: 18px;
`;

export const FooterWrap = styled.div`
  /* Display & Box Model */
  padding: 18px 24px;

  /* Color */
  background-color: ${COLORS.darkBlue};
`;

export const FooterBox = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  /* Color */
  color: ${COLORS.white};

  /* Text */
  font-size: 13px;
`;

export const Policies = styled.div`
  /* Display & Box Model */
  display: flex;
  align-items: center;
`;

export const PolicyList = styled.ul`
  /* Display & Box Model */
  display: flex;
  margin-left: 5px;
  li {
    /* Display & Box Model */
    margin: 10px;

    /* Text */
    text-decoration: underline;

    /* Other */
    cursor: pointer;
  }
`;
