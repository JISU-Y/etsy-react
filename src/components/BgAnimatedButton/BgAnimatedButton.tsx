import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Bracket from '../../icons/Bracket';
import COLORS from '../../styles/colors';
import TRANSITION from '../../styles/transition';

interface Props {
  buttonLabel: string | React.SVGProps<SVGSVGElement>;
  useToggle?: boolean;
  textColor?: string;
  bgColor?: string;
  toggleValue?: boolean;
  toggleShow?: (toggle: boolean) => void;
}

function BgAnimatedButton({
  buttonLabel,
  useToggle,
  textColor,
  bgColor,
  toggleValue,
  toggleShow,
}: Props) {
  const [toggle, setToggle] = useState(!toggleValue ?? false);

  const handleToggle = () => {
    setToggle(!toggle);
    toggleShow?.(toggle);
  };

  return (
    <Button textColor={textColor} bgColor={bgColor} onClick={handleToggle}>
      {buttonLabel}
      {useToggle && (
        <SVGWrapper rotated={toggle}>
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
    /* Positioning */
    position: relative;

    /* Display & Box Model */
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 12px 15px;
    border: none;

    /* Color */
    background: none;
    color: ${textColor ?? COLORS.mainFont};

    /* Text */
    font-size: 13px;
    font-weight: 500;

    /* Other */
    white-space: nowrap;
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
      border-radius: 30px;

      /* Color */
      background: ${bgColor ? bgColor : COLORS.hoverGray};

      /* Other */
      opacity: 0;
      transform: scale(0.8);
      transition: ${TRANSITION.quick};
    }
    &:hover::after {
      opacity: 1;
      transform: scale(1);
    }
  `}
`;

const SVGWrapper = styled.div<{ rotated: boolean }>`
  /* Positioning */
  width: 25px;
  height: 25px;

  /* Other */
  transition: ${TRANSITION.normal};
  transform: ${({ rotated }) => (rotated ? 'rotate(-180deg)' : 'rotate(0)')};
`;

export default BgAnimatedButton;
