import React from 'react';
import styled, { css } from 'styled-components';
import Bracket from '../../icons/Bracket';
import COLORS from '../../styles/colors';
import TRANSITION from '../../styles/transition';

interface Props {
  buttonLabel: string | React.SVGProps<SVGSVGElement>;
  useToggle?: boolean;
  shouldShow?: boolean;
  setShouldShow?: React.Dispatch<React.SetStateAction<boolean>>;
  textColor?: string;
  bgColor?: string;
}

function BgAnimatedButton({
  buttonLabel,
  useToggle,
  shouldShow,
  setShouldShow,
  textColor,
  bgColor,
}: Props) {
  return (
    <Button
      textColor={textColor}
      bgColor={bgColor}
      onClick={() => (setShouldShow ? setShouldShow(prev => !prev) : null)}
    >
      {buttonLabel}
      {useToggle && (
        <SVGWrapper rotated={shouldShow ?? false}>
          <Bracket width={25} height={25} color={COLORS.mainFont} />
        </SVGWrapper>
      )}
    </Button>
  );
}

const Button = styled.button<{
  textColor?: string;
  bgColor?: string;
}>`
  ${({ textColor, bgColor }) => css`
    font-size: 13px;
    font-weight: 500;
    background: none;
    border: none;
    width: fit-content;
    padding: 12px 15px;
    position: relative;
    display: flex;
    align-items: center;
    white-space: nowrap;
    color: ${textColor ?? COLORS.mainFont};
    cursor: pointer;
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 30px;
      transform: scale(0.8);
      background: ${bgColor ? bgColor : COLORS.hoverGray};
      opacity: 0;
      transition: ${TRANSITION.quick};
    }
    &:hover::after {
      transform: scale(1);
      opacity: 1;
    }
  `}
`;

const SVGWrapper = styled.div<{ rotated: boolean }>`
  width: 25px;
  height: 25px;
  transition: ${TRANSITION.normal};
  transform: rotate(0);
  transform: ${({ rotated }) => (rotated ? 'rotate(-180deg)' : 'rotate(0)')};
`;

export default BgAnimatedButton;
