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
  onClick?: () => void;
}

function SizeAnimatedButton({
  buttonLabel,
  textColor,
  bgColor,
  borderAttr,
  widthFit,
  onClick,
}: Props) {
  return (
    <Button
      textColor={textColor}
      bgColor={bgColor}
      borderAttr={borderAttr}
      widthFit={widthFit}
      onClick={onClick}
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
    /* Positioning */
    position: relative;

    /* Display & Box Model */
    width: ${widthFit ? 'fit-content' : '100%'};
    min-width: 48px;
    min-height: 48px;
    border: none;
    outline: none;
    padding: 12px 18px;

    /* Color */
    background-color: transparent;
    color: ${textColor};

    /* Text */
    font-size: 16px;
    font-weight: bold;
    text-align: center;

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
      box-sizing: border-box;
      border: ${borderAttr ?? 'none'};
      border-radius: 24px;

      /* Color */
      background-color: ${bgColor ?? COLORS.mainFont};
      color: ${textColor ?? COLORS.mainFont};

      /* Other */
      transition: ${TRANSITION.normal};
      transform: scale(1);
      z-index: ${borderAttr ? zIndex.base : zIndex.hide};
    }
    &:hover::after {
      /* Color */
      background-color: ${bgColor ?? COLORS.darkGray};

      /* Other */
      transform: scale(1.02);
    }
  `}
`;

export default SizeAnimatedButton;
