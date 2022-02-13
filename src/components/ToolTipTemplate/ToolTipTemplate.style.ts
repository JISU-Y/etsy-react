import styled, { css } from 'styled-components';

export const ToolTipContainer = styled.div<{
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  bgColor: string;
  color: string;
}>`
  display: inline-block;
  position: absolute;
  font-size: 13px;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(34, 34, 34, 0.15);
  opacity: 0;
  transform: translateY(-2px);
  transition: all 0.2s ease-in-out;
  z-index: 5;
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
