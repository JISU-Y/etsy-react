import React, { useState } from 'react';
import * as S from './TabMenu.style';

interface ITabMenu {
  list: string[] | undefined;
  currentTab?: number;
  handleTab?: (tab: number) => void;
  fontSize?: number;
  tagNumber?: number[];
}

function TabMenu({
  list,
  fontSize,
  tagNumber,
  currentTab,
  handleTab,
}: ITabMenu) {
  const [tab, setTab] = useState(currentTab ?? 0);

  const onTabClicked = (tabIndex: number) => {
    setTab(tabIndex);
    handleTab?.(tabIndex);
  };

  return (
    <S.MenuContainer>
      {list?.map((menu, index) => (
        <S.TabButton
          key={menu}
          onClick={() => onTabClicked(index)}
          list={list}
          currentTab={tab}
          fontSize={fontSize}
        >
          {menu}
          {tagNumber && (
            <S.TagNumber>{tagNumber[index].toLocaleString()}</S.TagNumber>
          )}
        </S.TabButton>
      ))}
    </S.MenuContainer>
  );
}

export default TabMenu;
