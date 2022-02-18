import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BgAnimatedButton from '../../../../components/BgAnimatedButton';
import FiveStars from '../../../../components/FiveStars';
import SizeAnimatedButton from '../../../../components/SizeAnimatedButton';
import ToolTipTemplate from '../../../../components/ToolTipTemplate';
import { currency } from '../../../../constants/localeSetting';
import { CartContext } from '../../../../contexts/CartContext';
import COLORS from '../../../../styles/colors';
import { padCentsDigits } from '../../../../utils/convertDigit';
import { Details } from '../../types/model';
import * as S from './SideInformation.style';

interface Props {
  provider: Details['provider'];
  title: Details['title'];
  sold: Details['sold'];
  price: Details['price'];
  finishOptions: Details['finishOptions'];
  lengthOptions: Details['lengthOptions'];
  image: string;
  discount: Details['discount'];
  id: Details['id'];
}

function SideInformation({
  provider,
  title,
  sold,
  price,
  finishOptions,
  lengthOptions,
  image,
  discount,
  id,
}: Props) {
  const { addItemtoCart } = useContext(CartContext);
  const [shouldShow, setShouldShow] = useState(false);
  const [isOverLimit, setIsOverLimit] = useState(false);
  const [formData, setFormData] = useState({
    color: '',
    length: '',
    personalization: '',
  });
  const [itemData, setItemData] = useState({
    seller: provider,
    image: image,
    name: title,
    options: formData,
    price: price,
    originalPrice: 0,
    discount: discount,
    shipping: 20,
    quantity: 1,
    id: id,
  });
  const history = useHistory();

  useEffect(() => {
    setIsOverLimit(formData.personalization.length >= 1024 ? true : false);
  }, [formData.personalization]);

  const handlePersonalizationShow = (toggle: boolean) => setShouldShow(toggle);

  const handelChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (!e.target.value) return;

    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    setItemData(prev => ({ ...prev, options: formData }));
  }, [formData]);

  const addToCart = () => {
    if (formData.color === '' || formData.length === '') return;

    addItemtoCart?.(itemData);
    history.push('/cart');
  };

  return (
    <S.SideInfoContainer>
      <S.SellerContainer>
        <S.NormalName>{provider}</S.NormalName>
        <S.SellerInfo>
          <S.SalesNumber>{sold.toLocaleString()} sales |</S.SalesNumber>
          <FiveStars width={12} height={12} color="black" gap={5} />
        </S.SellerInfo>
      </S.SellerContainer>
      <S.ProductInfoContainer>
        <S.ProductName>{title}</S.ProductName>
        <S.EtsyPickBox>
          <S.EtsyPick>Etsy's Pick</S.EtsyPick>
          <ToolTipTemplate
            top={30}
            left={20}
            bgColor={COLORS.white}
            color={COLORS.mainFont}
            element={<span>Selected by Etsy's style and trend editors.</span>}
          />
        </S.EtsyPickBox>
        <S.ProductPrice>
          {currency} {padCentsDigits(price)}
        </S.ProductPrice>
        <S.ProductTax>Local taxes included (where applicable)</S.ProductTax>
      </S.ProductInfoContainer>
      <S.ProductSelector>
        <S.SelectWrapper>
          <S.NormalName>Color</S.NormalName>
          <S.Select id="color" onChange={handelChange}>
            <S.Option value="">select an option</S.Option>
            {finishOptions.map(option => (
              <S.Option key={option} value={option}>
                {option}
              </S.Option>
            ))}
          </S.Select>
        </S.SelectWrapper>
        <S.SelectWrapper>
          <S.NormalName>Length</S.NormalName>
          <S.Select id="length" onChange={handelChange}>
            <S.Option value="">select an option</S.Option>
            {lengthOptions.map(option => (
              <S.Option key={option} value={option}>
                {option}
              </S.Option>
            ))}
          </S.Select>
        </S.SelectWrapper>
      </S.ProductSelector>
      <BgAnimatedButton
        buttonLabel="Add your personalization (optional)"
        useToggle
        toggleValue={shouldShow}
        toggleShow={handlePersonalizationShow}
      />
      <S.PersonalizationBox shouldShow={shouldShow}>
        <S.PersonalizationGuide>
          Please send us the Image/Pdf file you’d like us to use through the
          Contact Shop Owner button.
        </S.PersonalizationGuide>
        <S.PersonalizationText
          id="personalization"
          maxLength={1024}
          onChange={handelChange}
          value={formData.personalization}
          isOverLimit={isOverLimit}
        />
        <S.TextRemaining>
          {1024 - formData.personalization.length}
        </S.TextRemaining>
        {isOverLimit && (
          <S.LimitError>
            You’ve reached the limit! Use 1024 characters or less.
          </S.LimitError>
        )}
      </S.PersonalizationBox>
      <S.ButtonSpacer />
      <SizeAnimatedButton
        buttonLabel="Add to Cart"
        textColor={COLORS.white}
        onClick={addToCart}
      />
    </S.SideInfoContainer>
  );
}

export default SideInformation;
