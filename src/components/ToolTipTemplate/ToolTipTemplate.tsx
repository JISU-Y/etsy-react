import React, { ReactElement } from 'react';
import * as S from './ToolTipTemplate.style';

interface Props {
  element: ReactElement<any, any>;
  bgColor: string;
  color: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

function ToolTipTemplate({
  element,
  bgColor,
  color,
  top,
  left,
  right,
  bottom,
}: Props) {
  return (
    <S.ToolTipContainer
      className="tooltip"
      bgColor={bgColor}
      color={color}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
    >
      {element}
    </S.ToolTipContainer>
  );
}

export default ToolTipTemplate;
