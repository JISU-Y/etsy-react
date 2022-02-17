import React from 'react';
import BgAnimatedButton from '../../../../components/BgAnimatedButton';
import SizeAnimatedButton from '../../../../components/SizeAnimatedButton';
import COLORS from '../../../../styles/colors';
import * as S from './PaymentSection.style';

function PaymentSection() {
  return (
    <S.Container>
      <S.SectionTitle>How you'll pay</S.SectionTitle>
      <S.CheckBoxWrapper>
        <S.CheckBox type="checkbox" placeholder="visa" />
        <S.CheckBox type="checkbox" placeholder="paypal" />
      </S.CheckBoxWrapper>
      <div>
        <S.SectionTitle>Items(s) total</S.SectionTitle>
        <S.ContentsText>USD 44.00</S.ContentsText>
      </div>
      <div>
        <S.SectionTitle>Shop discount</S.SectionTitle>
        <S.ContentsText>-USD 13.20</S.ContentsText>
      </div>
      <hr />
      <div>
        <S.SectionTitle>Subtotal</S.SectionTitle>
        <S.ContentsText>USD 30.80</S.ContentsText>
      </div>
      <div>
        <S.SectionTitle>Shipping</S.SectionTitle>
        <S.ContentsText>USD 20.00</S.ContentsText>
        <span>(To South Korea)</span>
      </div>
      <hr />
      <div>
        <S.SectionTitle>Total(1 item)</S.SectionTitle>
        <S.ContentsText>USD 50.80</S.ContentsText>
      </div>
      <SizeAnimatedButton
        buttonLabel="Proceed to checkout"
        textColor={COLORS.white}
      />
      <BgAnimatedButton buttonLabel="Apply Etsy coupon code" />
      <S.BottomNoti>Local taxes included (where applicable)</S.BottomNoti>
      <S.BottomNoti>
        * Additional duties and taxes <span>may apply</span>
      </S.BottomNoti>
    </S.Container>
  );
}

export default PaymentSection;
