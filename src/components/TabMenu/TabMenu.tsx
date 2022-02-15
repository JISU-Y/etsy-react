import React from 'react';
import * as S from './TabMenu.style';

interface ITabMenu {
  list: string[] | undefined;
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
  fontSize?: number;
  tagNumber?: number[];
}

function TabMenu({
  list,
  currentTab,
  setCurrentTab,
  fontSize,
  tagNumber,
}: ITabMenu) {
  return (
    <S.MenuContainer>
      {list?.map((menu, index) => (
        <S.TabButton
          key={menu}
          onClick={() => setCurrentTab(index)}
          list={list}
          currentTab={currentTab}
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
