import React from 'react';
import BgAnimatedButton from '../../../../components/BgAnimatedButton';
import { currency } from '../../../../constants/localeSetting';
import * as S from './ProductsSection.style';

function ProductsSection() {
  return (
    <S.Container>
      <S.CartProduct>
        <S.SellerInfo>
          <S.SellerName>ivoryMR</S.SellerName>
          <S.SellerContact>Contact shop</S.SellerContact>
        </S.SellerInfo>
        <S.ProductInfo>
          <S.ProductImgWrapper>
            <S.ProductImg src="https://i.etsystatic.com/10953576/c/1500/1146/0/0/il/353f28/1050514883/il_170x135.1050514883_54k2.jpg" />
          </S.ProductImgWrapper>
          <S.ProductDetailBox>
            <S.Title>
              Actual Handwriting Necklace - Signature Necklace - Memorial
              Necklace - Personalized Jewelry - Memorial Gift - Gift For Mom
            </S.Title>
            <S.OptionsBox>
              <S.OptionList>Color: Sterling Silver</S.OptionList>
              <S.OptionList>Length: 15 Inches</S.OptionList>
              <S.EditButton>Edit</S.EditButton>
              <S.OptionList>
                Personalization: Not requested on this item.
              </S.OptionList>
            </S.OptionsBox>
            <S.ButtonBox>
              <BgAnimatedButton buttonLabel={<S.Span>Save for later</S.Span>} />
              <BgAnimatedButton buttonLabel={<S.Span>Remove</S.Span>} />
            </S.ButtonBox>
          </S.ProductDetailBox>
          <S.QuantitySelect>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </S.QuantitySelect>
          <S.PriceInfo>
            <S.CurrentPrice>{currency} 30.80</S.CurrentPrice>
            <S.OriginalPrice>{currency} 44.00</S.OriginalPrice>
            <S.SaleNoti>Sale: 30% off</S.SaleNoti>
          </S.PriceInfo>
        </S.ProductInfo>
      </S.CartProduct>
    </S.Container>
  );
}

export default ProductsSection;
