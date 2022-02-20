import React, { useContext, useState } from 'react';
import CartIcon from '../../icons/CartIcon';
import Logo from '../../icons/Logo';
import ToolTipTemplate from '../ToolTipTemplate';
import * as S from './Header.style';
import { menu } from './Header.data';
import COLORS from '../../styles/colors';
import BgAnimatedButton from '../BgAnimatedButton';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

function Header() {
  const { cartItems } = useContext(CartContext);
  const [lineIndex, setLineIndex] = useState(0);

  const history = useHistory();

  const gotoCart = () => history.push('/cart');
  const gotoMain = () => history.push('/main');

  return (
    <S.HeaderContainer>
      <S.SearchContainer>
        <S.LogoWrapper onClick={gotoMain}>
          <Logo width={80} height={40} color="orange" />
        </S.LogoWrapper>
        <S.SearchForm>
          <S.Input type="text" placeholder="Search for anything" />
          <S.SearchButton>검색</S.SearchButton>
        </S.SearchForm>
        <BgAnimatedButton buttonLabel="Sign in" />
        <S.CartButtonWrapper onClick={gotoCart}>
          {cartItems.length ? (
            <S.CartCount>{cartItems.length}</S.CartCount>
          ) : null}
          <BgAnimatedButton
            buttonLabel={<CartIcon width={24} height={24} color="black" />}
          />
          <ToolTipTemplate
            bgColor={COLORS.darkGray}
            color={COLORS.white}
            bottom={-45}
            left={0}
            element={<S.CartToolTipSpan>Cart</S.CartToolTipSpan>}
          />
        </S.CartButtonWrapper>
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
