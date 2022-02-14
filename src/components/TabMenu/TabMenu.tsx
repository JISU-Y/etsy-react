import React from 'react';
import { MenuContainer, TabButton } from './TabMenu.style';

interface ITabMenu {
  list: string[] | undefined;
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

function TabMenu({ list, currentTab, setCurrentTab }: ITabMenu) {
  return (
    <MenuContainer>
      {list?.map((menu, index) => (
        <TabButton
          key={menu}
          onClick={() => setCurrentTab(index)}
          list={list}
          currentTab={currentTab}
        >
          {menu}
        </TabButton>
      ))}
    </MenuContainer>
  );
}

export default TabMenu;
