import React from 'react';
import BgAnimatedButton from '../../components/BgAnimatedButton';
import Header from '../../components/Header';
import * as S from './Cart.style';
import ProductsSection from './sections/ProductsSection';

function Cart() {
  return (
    <>
      <Header />
      <S.CartContainer>
        <S.CartHeader>
          <S.CartCounts>1 item in your cart</S.CartCounts>
          <S.ButtonWrapper>
            <BgAnimatedButton buttonLabel={<S.Span>Keep shopping</S.Span>} />
          </S.ButtonWrapper>
        </S.CartHeader>
        <ProductsSection />
      </S.CartContainer>
    </>
  );
}

export default Cart;
