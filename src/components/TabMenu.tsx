import React, { FC } from 'react';
import styled from 'styled-components';

interface TabMenuProps {
  list: string[];
}

const TabMenu: FC<TabMenuProps> = props => {
  const { list } = props;
  return (
    <MenuContainer {...props}>
      {list.map(menu => (
        <button key={menu}>{menu}</button>
      ))}
    </MenuContainer>
  );
};

const MenuContainer = styled.div<TabMenuProps>`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
  button {
    width: ${props => 100 / props.list.length ?? 1}%;
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
    &:focus {
      color: black;
    }
    &:focus::after {
      width: 100%;
      border-bottom: 2px solid black;
    }
  }
`;

export default TabMenu;
