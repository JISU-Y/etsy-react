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
  display: inline-block;
  max-width: 300px;
  position: absolute;
  font-size: 13px;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 4px 20px ${COLORS.shadowGray};
  opacity: 0;
  transform: translateY(-2px);
  transition: all 0.2s ease-in-out;
  z-index: 5;
  pointer-events: none;
  ${({ top, left, bottom, right, bgColor, color }) => css`
    top: ${top}px;
    left: ${left}px;
    bottom: ${bottom}px;
    right: ${right}px;
    background-color: ${bgColor};
    color: ${color};
  `}
  &::after {
    content: '';
    position: absolute;
    transform: rotate(45deg);
    background: inherit;
    width: 9px;
    height: 9px;
    top: -3px;
    left: 10px;
  }
`;
