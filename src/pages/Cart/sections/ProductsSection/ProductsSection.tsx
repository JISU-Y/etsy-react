import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BgAnimatedButton from '../../../../components/BgAnimatedButton';
import { currency } from '../../../../constants/localeSetting';
import { CartContext } from '../../../../contexts/CartContext';
import { CartItemProps } from '../../../../types';
import { padCentsDigits } from '../../../../utils/convertDigit';
import * as S from './ProductsSection.style';

function ProductsSection() {
  const { cartItems, changeQuantities, removeItemFromCart } =
    useContext(CartContext);
  const history = useHistory();

  const gotoDetail = (id: number) => {
    history.push(`detail/${id}`, { id });
  };

  return (
    <S.Container>
      {cartItems?.map(
        ({
          id,
          seller,
          image,
          name,
          options,
          price,
          originalPrice,
          discount,
          quantity,
        }: CartItemProps) => (
          <S.CartProduct key={id}>
            <S.SellerInfo>
              <S.SellerName>{seller}</S.SellerName>
              <S.SellerContact>Contact shop</S.SellerContact>
            </S.SellerInfo>
            <S.ProductInfo>
              <S.ProductImgWrapper>
                <S.ProductImg src={image} />
              </S.ProductImgWrapper>
              <S.ProductDetailBox>
                <S.Title onClick={() => gotoDetail(id)}>{name}</S.Title>
                <S.OptionsBox>
                  <S.OptionList>Color: {options.color}</S.OptionList>
                  <S.OptionList>Length: {options.length} Inches</S.OptionList>
                  <S.EditButton>Edit</S.EditButton>
                  <S.OptionList>
                    Personalization:{' '}
                    {options.personalization !== ''
                      ? options.personalization
                      : 'Not requested on this item.'}
                  </S.OptionList>
                </S.OptionsBox>
                <S.ButtonBox>
                  <BgAnimatedButton
                    buttonLabel={<S.Span>Save for later</S.Span>}
                  />
                  <S.BgButtonWrapper onClick={() => removeItemFromCart?.(id)}>
                    <BgAnimatedButton buttonLabel={<S.Span>Remove</S.Span>} />
                  </S.BgButtonWrapper>
                </S.ButtonBox>
              </S.ProductDetailBox>
              <S.QuantitySelect
                onChange={e => changeQuantities?.(id, parseInt(e.target.value))}
                value={quantity}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </S.QuantitySelect>
              <S.PriceInfo>
                <S.CurrentPrice>
                  {currency} {padCentsDigits(price)}
                </S.CurrentPrice>
                <S.OriginalPrice>
                  {discount
                    ? `${currency} ${padCentsDigits(originalPrice ?? 0)}`
                    : null}
                </S.OriginalPrice>
                <S.SaleNoti>
                  {discount ? `Sale: ${discount}% off` : null}
                </S.SaleNoti>
              </S.PriceInfo>
            </S.ProductInfo>
          </S.CartProduct>
        )
      )}
    </S.Container>
  );
}

export default ProductsSection;
