import React, { useState } from 'react';
import CartIcon from '../../icons/CartIcon';
import Logo from '../../icons/Logo';
import * as S from './Header.style';
import { menu } from './Header.data';

function Header() {
  const [lineIndex, setLineIndex] = useState(0);

  return (
    <S.HeaderContainer>
      <S.SearchContainer>
        <span>
          <Logo width={80} height={40} color="orange" />
        </span>
        <S.SearchForm>
          <S.Input type="text" placeholder="Search for anything" />
          <S.SearchButton>검색</S.SearchButton>
        </S.SearchForm>
        <S.SignInButton>Sign in</S.SignInButton>
        <S.CartButton>
          <CartIcon width={24} height={24} color="black" />
        </S.CartButton>
      </S.SearchContainer>
      <S.MenuContainer>
        <S.MenuList>
          {menu.map((tab, index) => (
            <S.Menu
              key={tab}
              onMouseEnter={() => setLineIndex(index)}
              onMouseLeave={() => setLineIndex(index)}
              index={lineIndex}
            >
              {tab}
            </S.Menu>
          ))}
          <S.IndicatorLine />
        </S.MenuList>
      </S.MenuContainer>
      <S.BorderLine />
    </S.HeaderContainer>
  );
}

export default Header;
