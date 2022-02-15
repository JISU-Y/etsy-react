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
  min-width: 220px;
  flex: 1;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  margin: 0 18px;
  padding: 10px 0;
  color: ${COLORS.subFont};
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    border-bottom: 2px solid ${COLORS.subFont};
    transition: ${TRANSITION.normal};
  }
  &:hover::after {
    width: 100%;
  }
  ${({ list, currentTab, fontSize }) => css`
    width: ${100 / list?.length ?? 1}%;
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
  background-color: ${COLORS.hoverGray};
  border-radius: 15px;
  margin-left: 12px;
  font-size: 13px;
  padding: 6px 9px;
  min-width: 25px;
`;
