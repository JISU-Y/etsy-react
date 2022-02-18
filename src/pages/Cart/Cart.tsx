import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BgAnimatedButton from '../../components/BgAnimatedButton';
import Header from '../../components/Header';
import { CartContext } from '../../contexts/CartContext';
import * as S from './Cart.style';
import PaymentSection from './sections/PaymentSection';
import ProductsSection from './sections/ProductsSection';

function Cart() {
  const { cartItems } = useContext(CartContext);
  const history = useHistory();

  const gotoMain = () => history.push(`/main`);

  return (
    <>
      <Header />
      <S.CartContainer>
        <S.CartHeader>
          <S.CartCounts>
            {cartItems.length < 2
              ? `${cartItems.length} item`
              : `${cartItems.length} items`}{' '}
            in your cart
          </S.CartCounts>
          <S.ButtonWrapper onClick={gotoMain}>
            <BgAnimatedButton buttonLabel={<S.Span>Keep shopping</S.Span>} />
          </S.ButtonWrapper>
        </S.CartHeader>
        <S.CartWrapper>
          <ProductsSection />
          <PaymentSection />
        </S.CartWrapper>
      </S.CartContainer>
    </>
  );
}

export default Cart;
