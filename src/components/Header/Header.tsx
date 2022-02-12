import React, { useState } from 'react';
import CartIcon from '../../icons/CartIcon';
import Logo from '../../icons/Logo';
import {
  BorderLine,
  CartButton,
  HeaderContainer,
  IndicatorLine,
  Input,
  Menu,
  MenuContainer,
  MenuList,
  SearchButton,
  SearchContainer,
  SearchForm,
  SignInButton,
} from './Header.style';

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
    <HeaderContainer>
      <SearchContainer>
        <span>
          <Logo width={80} height={40} color="orange" />
        </span>
        <SearchForm>
          <Input type="text" placeholder="Search for anything" />
          <SearchButton>검색</SearchButton>
        </SearchForm>
        <SignInButton>Sign in</SignInButton>
        <CartButton>
          <CartIcon width={24} height={24} color="black" />
        </CartButton>
      </SearchContainer>
      <MenuContainer
        onMouseEnter={() => setAlreadyIn(true)}
        onMouseLeave={() => setAlreadyIn(false)}
      >
        <MenuList>
          {menu.map((tab, index) => (
            <Menu
              key={tab}
              onMouseEnter={e => indicatePositionLine(e.currentTarget, index)}
            >
              {tab}
            </Menu>
          ))}
        </MenuList>
        <IndicatorLine
          alreadyIn={alreadyIn}
          listWidth={listWidth}
          linePosition={linePosition}
        />
      </MenuContainer>
      <BorderLine />
    </HeaderContainer>
  );
}

export default Header;
