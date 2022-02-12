import React, { useState } from 'react';
import * as S from './Header.style';

const menu = [
  'Jewelry & Acessories',
  'Clothing & Shoes',
  'Home & Living',
  'Wedding & Party',
  'Toys & Enertainment',
  'Art & Cellectibles',
  'Craft Supplies & Tools',
  'Vintage',
];

function Header() {
  const [alreadyIn, setAlreadyIn] = useState(false);
  const [listWidth, setListWidth] = useState(0);
  const [linePosition, setLinePosition] = useState(0);

  const indicatePositionLine = (
    target: EventTarget & HTMLLIElement,
    index: number
  ) => {
    if (!target.parentNode?.childNodes) return;

    const startPosition = Array.from(
      target.parentNode?.childNodes as NodeListOf<HTMLLIElement>
    )
      .slice(0, index)
      .reduce(
        (acc: number, tab: HTMLLIElement): number => (acc += tab.clientWidth),
        0
      );
    setLinePosition(startPosition);
    setListWidth(target.clientWidth);
  };

  return (
    <S.HeaderContainer>
      <S.SearchContainer>
        <span>logo</span>
        <S.SearchForm>
          <S.Input type="text" placeholder="Search for anything" />
          <S.SearchButton>검색</S.SearchButton>
        </S.SearchForm>
        <S.SignInButton>Sign in</S.SignInButton>
        <S.CartButton>🛒</S.CartButton>
      </S.SearchContainer>
      <S.MenuContainer
        onMouseEnter={() => setAlreadyIn(true)}
        onMouseLeave={() => setAlreadyIn(false)}
      >
        <S.MenuList>
          {menu.map((tab, index) => (
            <S.Menu
              key={tab}
              onMouseEnter={e => indicatePositionLine(e.currentTarget, index)}
            >
              {tab}
            </S.Menu>
          ))}
        </S.MenuList>
        <S.IndicatorLine
          alreadyIn={alreadyIn}
          listWidth={listWidth}
          linePosition={linePosition}
        />
      </S.MenuContainer>
      <S.BorderLine />
    </S.HeaderContainer>
  );
}

export default Header;
