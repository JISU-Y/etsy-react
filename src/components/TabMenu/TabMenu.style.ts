import styled, { css } from 'styled-components';
import COLORS from '../../styles/colors';
import TRANSITION from '../../styles/transition';

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${COLORS.border};
`;

export const TabButton = styled.button<{
  list: string[];
  currentTab: number;
  fontSize?: number;
}>`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  flex: 1;
  min-width: 220px;
  margin: 0 18px;
  padding: 10px 0;
  background: none;
  border: none;

  /* Color */
  color: ${COLORS.subFont};

  /* Text */
  text-align: center;

  /* Other */
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &::after {
    content: '';
    /* Positioning */
    position: absolute;
    bottom: -2px;
    left: 50%;

    /* Display & Box Model */
    width: 0;
    border-bottom: 2px solid ${COLORS.subFont};

    /* Other */
    transition: ${TRANSITION.normal};
    transform: translateX(-50%);
  }
  &:hover::after {
    width: 100%;
  }
  ${({ list, currentTab, fontSize }) => css`
    /* Display & Box Model */
    width: ${100 / list?.length ?? 1}%;

    /* Text */
    font-size: ${fontSize ?? 20}px;

    &:nth-child(${currentTab + 1}) {
      color: ${COLORS.mainFont};
    }
    &:nth-child(${currentTab + 1})::after {
      width: 100%;
      border-bottom: 2px solid ${COLORS.mainFont};
    }
  `}
`;

export const TagNumber = styled.span`
  /* Display & Box Model */
  min-width: 25px;
  padding: 6px 9px;
  margin-left: 12px;
  border-radius: 15px;

  /* Color */
  background-color: ${COLORS.hoverGray};

  /* Text */
  font-size: 13px;
`;
