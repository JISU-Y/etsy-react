import styled, { css } from 'styled-components';
import COLORS from '../../styles/colors';
import TRANSITION from '../../styles/transition';
import zIndex from '../../styles/zIndex';

export const FooterContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.beige};
  position: relative;
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
  width: 100%;
  position: absolute;
  ${({ top, left, bottom, right }) => css`
    top: ${top}px;
    left: ${left}px;
    bottom: ${bottom}px;
    right: ${right}px;
  `}
`;

export const AboutWrapper = styled.div`
  max-width: 1400px;
  margin: auto;
  margin-top: 50px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 54px;
`;

export const AboutTitle = styled.h1`
  font-size: 44px;
  line-height: 48px;
`;

export const AboutLink = styled.p`
  font-size: 14px;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  color: ${COLORS.mainFont};
  transition: ${TRANSITION.normal};
  &:hover {
    color: ${COLORS.subFont};
  }
`;

export const AboutList = styled.div`
  display: flex;
  margin: 36px 0 42px;
`;

export const AboutListContent = styled.div`
  flex: 1;
  margin: 10px;
`;

export const ContentTitle = styled.h2`
  padding: 0;
  margin-bottom: 18px;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
`;

export const ContentParagraph = styled.div`
  font-size: 16px;
  line-height: 28px;
`;

export const ContentMoreSpan = styled.span`
  cursor: help;
  border-bottom: 2px dashed black;
  &:hover ~ .tooltip {
    display: inline-block;
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;
  }
`;

export const ToolTipUl = styled.ul`
  padding: 9px;
  padding-left: 18px;
`;

export const ToolTipLi = styled.li`
  list-style: disc;
  font-size: 14px;
`;

export const AboutFootTitle = styled.h3`
  font-size: 21px;
  font-weight: bold;
`;

export const AboutFootButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  padding: 10px 15px;
  border-radius: 30px;
  border: 2px solid black;
  margin-top: 20px;
  background: transparent;
  cursor: pointer;
  transform: scale(1);
  transition: ${TRANSITION.normal};
  &:hover {
    transform: scale(1.02);
  }
`;

export const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  background-color: #d7e6f5;
  position: relative;
  margin-top: 50px;
`;

export const SubscribeTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
`;

export const SubscribeForm = styled.form`
  display: flex;
  width: 100%;
  height: 48px;
  max-width: 480px;
  border-radius: 50px;
  border: 1px solid ${COLORS.border};
  overflow: hidden;
  box-shadow: 1px 2px 4px 0 ${COLORS.shadowGray} inset;
  margin-bottom: 50px;
  transition: ${TRANSITION.normal};
  &:hover {
    border: 1px solid ${COLORS.subFont};
  }
`;

export const SubscribeButton = styled.button`
  background: ${COLORS.backgroundGray};
  width: fit-content;
  padding: 0 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  color: ${COLORS.mainFont};
  &::after {
    content: '';
    font-size: 16px;
    line-height: 46px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.85);
    transition: ${TRANSITION.quick};
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    z-index: ${zIndex.base};
  }
  &::before {
    content: '';
    font-size: 16px;
    line-height: 46px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: ${COLORS.white};
    z-index: ${zIndex.base + 1};
  }
  &:hover::after {
    transform: scale(1);
    background-color: ${COLORS.darkGray};
    color: ${COLORS.white};
  }
  &:hover::before {
    content: 'Subscribe';
    color: ${COLORS.white};
  }
`;

export const Input = styled.input`
  background: ${COLORS.backgroundGray};
  padding: 10px 0 10px 20px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  &:focus ~ ${SubscribeButton}::after {
    transform: scale(1);
    background-color: ${COLORS.darkGray};
    color: ${COLORS.white};
  }
  &:focus ~ ${SubscribeButton}::before {
    content: 'Subscribe';
    color: ${COLORS.white};
  }
`;

export const SubscribeFooter = styled.div`
  width: 100%;
  background-color: #4d6bc6;
  padding-bottom: 30px;
`;

export const SubscribeFooterInfo = styled.div`
  width: fit-content;
  display: flex;
  color: #fff;
  margin: 90px auto 0;
  svg {
    width: fit-content;
  }
`;

export const SubscribeFooterSpan = styled.span`
  width: 100%;
  font-size: 16px;
  line-height: 28px;
  margin-left: 10px;
  cursor: help;
  border-bottom: 2px dashed #fff;
`;

export const Guides = styled.div`
  display: flex;
  padding: 36px 24px;
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
`;

export const GuidesWrapper = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  max-width: 1400px;
`;

export const GuidesBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const GuidesBoxTitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
`;

export const GuidesBoxContents = styled.ul`
  font-size: 13px;
`;

export const Guide = styled.li`
  margin-bottom: 10px;
  width: fit-content;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const HelpBox = styled.div`
  padding: 24px 0;
`;

export const DownloadButton = styled.button`
  font-weight: bold;
  border: none;
  min-height: 36px;
  padding: 5px 15px;
  cursor: pointer;
  background: transparent;
  position: relative;
  color: ${COLORS.white};
  &::after {
    content: '';
    width: 100%;
    min-height: 36px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 36px;
    border: 2px solid #fff;
    transition: ${TRANSITION.normal};
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

export const IconsBox = styled.div`
  display: flex;
  margin-top: 18px;
`;

export const FooterWrap = styled.div`
  padding: 18px 24px;
  background-color: ${COLORS.darkBlue};
`;

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: ${COLORS.white};
  width: 100%;
`;

export const LocaleInfo = styled.div`
  display: inline-block;
  font-weight: 500;
  line-height: 1.4;
  min-height: 36px;
  min-width: 36px;
  padding: 9px 15px;
  border-radius: 36px;
  background-color: transparent;
  transition: ${TRANSITION.normal};
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.hoverWhite};
  }
`;

export const Policies = styled.div`
  display: flex;
  align-items: center;
`;

export const PolicyList = styled.ul`
  display: flex;
  margin-left: 5px;
  li {
    margin: 10px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
