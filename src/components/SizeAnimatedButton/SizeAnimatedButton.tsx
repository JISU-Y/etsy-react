import React from 'react';
import styled, { css } from 'styled-components';
import COLORS from '../../styles/colors';
import TRANSITION from '../../styles/transition';
import zIndex from '../../styles/zIndex';

interface Props {
  buttonLabel: string;
  textColor?: string;
  bgColor?: string;
  borderAttr?: string;
  widthFit?: boolean;
}

function SizeAnimatedButton({
  buttonLabel,
  textColor,
  bgColor,
  borderAttr,
  widthFit,
}: Props) {
  return (
    <Button
      textColor={textColor}
      bgColor={bgColor}
      borderAttr={borderAttr}
      widthFit={widthFit}
    >
      {buttonLabel}
    </Button>
  );
}

const Button = styled.button<{
  textColor?: string;
  bgColor?: string;
  borderAttr?: string;
  widthFit?: boolean;
}>`
  ${({ textColor, bgColor, borderAttr, widthFit }) => css`
    color: ${textColor};
    width: ${widthFit ? 'fit-content' : '100%'};
    min-width: 48px;
    min-height: 48px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 18px;
    text-align: center;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background-color: ${bgColor ?? COLORS.mainFont};
      border: ${borderAttr ?? 'none'};
      color: ${textColor ?? COLORS.mainFont};
      transform: scale(1);
      transition: ${TRANSITION.normal};
      border-radius: 24px;
      z-index: ${borderAttr ? zIndex.base : zIndex.hide};
    }
    &:hover::after {
      transform: scale(1.02);
      background-color: ${bgColor ?? COLORS.darkGray};
    }
  `}
`;

export default SizeAnimatedButton;
