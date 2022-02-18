import React, { useState } from 'react';
import BgAnimatedButton from '../../../../components/BgAnimatedButton';
import SizeAnimatedButton from '../../../../components/SizeAnimatedButton';
import { currency, location } from '../../../../constants/localeSetting';
import COLORS from '../../../../styles/colors';
import * as S from './PaymentSection.style';

function PaymentSection() {
  const [payment, setPayment] = useState('Checkout');

  const handlePayment = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPayment(e.target.value);

  return (
    <S.Container>
      <S.SectionTitle>How you'll pay</S.SectionTitle>
      <S.RadioWrapper>
        <S.RadioBox>
          <S.Radio
            type="radio"
            id="Checkout"
            name="payment"
            value="Checkout"
            checked={payment === 'Checkout'}
            onChange={handlePayment}
          />
          <S.RadioCheckMark htmlFor="Checkout" />
          <S.RadioLabel>Checkout</S.RadioLabel>
        </S.RadioBox>
        <S.RadioBox>
          <S.Radio
            type="radio"
            id="PayPal"
            name="payment"
            value="PayPal"
            checked={payment === 'PayPal'}
            onChange={handlePayment}
          />
          <S.RadioCheckMark htmlFor="PayPal" />
          <S.RadioLabel>PayPal</S.RadioLabel>
        </S.RadioBox>
      </S.RadioWrapper>
      <S.LineDiv>
        <S.SectionTitle>Items(s) total</S.SectionTitle>
        <S.ContentsText>{currency} 44.00</S.ContentsText>
      </S.LineDiv>
      <S.LineDiv>
        <S.SectionTitle>Shop discount</S.SectionTitle>
        <S.ContentsText>-{currency} 13.20</S.ContentsText>
      </S.LineDiv>
      <S.Divide />
      <S.LineDiv>
        <S.ContentsText>Subtotal</S.ContentsText>
        <S.ContentsText>{currency} 30.80</S.ContentsText>
      </S.LineDiv>
      <S.LineDiv>
        <S.ContentsText>Shipping</S.ContentsText>
        <S.ContentsText>{currency} 20.00</S.ContentsText>
      </S.LineDiv>
      <S.ShippingLocation>
        (To <span>{location}</span>)
      </S.ShippingLocation>
      <S.Divide />
      <S.LineDiv>
        <S.SectionTitle>Total(1 item)</S.SectionTitle>
        <S.SectionTitle>{currency} 50.80</S.SectionTitle>
      </S.LineDiv>
      <S.SizeButtonWrapper>
        <SizeAnimatedButton
          buttonLabel={`Proceed to ${payment}`}
          textColor={COLORS.white}
        />
      </S.SizeButtonWrapper>
      <S.BgButtonWrapper>
        <BgAnimatedButton
          buttonLabel={<S.CodeSpan>Apply Etsy coupon code</S.CodeSpan>}
        />
      </S.BgButtonWrapper>
      <S.BottomBox>
        <S.BottomNoti>Local taxes included (where applicable)</S.BottomNoti>
        <S.BottomNoti>
          * Additional duties and taxes <span>may apply</span>
        </S.BottomNoti>
      </S.BottomBox>
    </S.Container>
  );
}

export default PaymentSection;
