import React, { useEffect, useState } from 'react';
import * as S from './TabMenu.style';

interface ITabMenu {
  list: string[] | undefined;
  handleTab?: (tab: number) => void;
  fontSize?: number;
  tagNumber?: number[];
}

function TabMenu({ list, fontSize, tagNumber, handleTab }: ITabMenu) {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (!handleTab) return;
    handleTab(tab);
  }, [handleTab, tab]);

  return (
    <S.MenuContainer>
      {list?.map((menu, index) => (
        <S.TabButton
          key={menu}
          onClick={() => setTab(index)}
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
