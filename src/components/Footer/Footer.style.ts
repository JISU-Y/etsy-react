import styled from 'styled-components';

export const FooterContainer = styled.div`
  max-width: 1400px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 54px;
`;

export const AboutLink = styled.p`
  font-size: 14px;
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  color: black;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: gray;
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
  line-height: 36px;
`;

export const ContentParagraph = styled.p`
  font-size: 16px;
  line-height: 28px;
  span {
    cursor: help;
    border-bottom: 2px dashed black;
  }
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
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
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
  border: 1px solid lightgray;
  overflow: hidden;
  box-shadow: 1px 2px 4px 0 rgba(34, 34, 34, 0.1) inset;
  margin-bottom: 50px;
  transition: border 0.2s ease-in-out;
  &:hover {
    border: 1px solid gray;
  }
`;

export const SubscribeButton = styled.button`
  background: rgba(34, 34, 34, 0.05);
  width: fit-content;
  padding: 0 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  color: #222;
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
    transition: transform 0.1s ease-in-out;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    z-index: 5;
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
    color: #fff;
    z-index: 6;
  }
  &:hover::after {
    transform: scale(1);
    background: #222;
    color: #fff;
  }
  &:hover::before {
    content: 'Subscribe';
    color: #fff;
  }
`;

export const Input = styled.input`
  background: rgba(34, 34, 34, 0.05);
  padding: 10px 0 10px 20px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  &:focus ~ ${SubscribeButton}::after {
    transform: scale(1);
    background: #222;
    color: #fff;
  }
  &:focus ~ ${SubscribeButton}::before {
    content: 'Subscribe';
    color: #fff;
  }
`;

export const SubscribeFooter = styled.div``;

export const SubscribeFooterInfo = styled.p`
  font-size: 16px;
  line-height: 28px;
  cursor: help;
  border-bottom: 2px dashed black;
`;

export const Guides = styled.div`
  display: flex;
  padding: 36px 24px;
  background-color: #2f466c;
  color: #fff;
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
  li {
    margin-bottom: 10px;
    cursor: pointer;
  }
  li:hover {
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
  color: #fff;
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
    transition: transform 0.2s ease-in-out;
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
  background-color: #232347;
`;

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #fff;
  width: 100%;
  max-width: 1400px;
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
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
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
