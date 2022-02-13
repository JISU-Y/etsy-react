import styled, { css } from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
`;

export const TabButton = styled.button<{ list: string[]; currentTab: number }>`
  width: ${props => 100 / props.list?.length ?? 1}%;
  flex: 1;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  margin: 0 18px;
  padding: 10px 0;
  color: gray;
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
    border-bottom: 2px solid gray;
    transition: all 0.2s ease-in;
  }
  &:hover::after {
    width: 100%;
  }
  ${({ currentTab }) => css`
    &:nth-child(${currentTab + 1}) {
      color: black;
    }
    &:nth-child(${currentTab + 1})::after {
      width: 100%;
      border-bottom: 2px solid black;
    }
  `}
`;
