import styled, { css } from 'styled-components';
import COLORS from '../../styles/colors';

export const ToolTipContainer = styled.div<{
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  bgColor: string;
  color: string;
}>`
  ${({ top, left, bottom, right, bgColor, color }) => css`
    /* Positioning */
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    bottom: ${bottom}px;
    right: ${right}px;

    /* Display & Box Model */
    display: inline-block;
    max-width: 300px;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 0 4px 20px ${COLORS.shadowGray};

    /* Color */
    background-color: ${bgColor};
    color: ${color};

    /* Text */
    font-size: 13px;

    /* Other */
    opacity: 0;
    pointer-events: none;
    z-index: 5;
    transform: translateY(-2px);
    transition: all 0.2s ease-in-out;
  `}

  &::after {
    content: '';
    /* Positioning */
    position: absolute;
    top: -3px;
    left: 10px;

    /* Display & Box Model */
    width: 9px;
    height: 9px;

    /* Color */
    background: inherit;

    /* Other */
    transform: rotate(45deg);
  }
`;
