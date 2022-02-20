import { useContext, useEffect, useState } from 'react';
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
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormData } from './types';

interface Props {
  details: Details;
  image: string;
}

function SideInformation({ details, image }: Props) {
  // Refactor: 이런식으로 하나만 받고, destruction
  const {
    id,
    provider,
    title,
    price,
    discount,
    sold,
    finishOptions,
    lengthOptions,
  } = details;

  const { addItemtoCart } = useContext(CartContext);
  const [shouldShow, setShouldShow] = useState(false);
  const [isOverLimit, setIsOverLimit] = useState(false);

  // const [formData, setFormData] = useState({
  //   color: '',
  //   length: '',
  //   personalization: '',
  // });

  const history = useHistory();

  // 사실 여기에 있는 form-data는 양이 많아질수록 일일히 state관리하기가 힘들어서 form-control 라이브러리를 사용하는 편이예요. ex. formik, react-hook-form

  const {
    register,
    handleSubmit,
    watch,
    formState: { dirtyFields },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  // const formData = getValues();
  const formData = watch();
  const { personalization } = formData;

  useEffect(() => {
    setIsOverLimit(personalization?.length >= 1024 ? true : false);
  }, [personalization]);

  const handlePersonalizationShow = (toggle: boolean) => setShouldShow(toggle);

  // const handleChange = (
  //   e:
  //     | React.ChangeEvent<HTMLSelectElement>
  //     | React.ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   if (!e.target.value) return;

  //   setFormData({
  //     ...formData,
  //     [e.target.id]: e.target.value,
  //   });
  // };

  // Refactor: state만들어두시는 것도 쓰는 라인 바로 위에 묶어서 위치했으면 좋겠어요.

  // const [itemData, setItemData] = useState<CartItemProps>({
  //   seller: provider,
  //   image: image,
  //   name: title,
  //   options: formData,
  //   price: price,
  //   originalPrice: 0,
  //   discount: discount,
  //   shipping: 20,
  //   quantity: 1,
  //   id: id,
  // });

  // useEffect(() => {
  //   setItemData(prev => ({
  //     ...prev,
  //     options: { ...formData },
  //   }));
  // }, [formData]);

  const [hasError, setHasError] = useState(false);

  const addToCart = () => {
    if (!dirtyFields.color || !dirtyFields.length) {
      setHasError(true);
      return;
    }

    const itemData = {
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
    };

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
      <S.ProductSelector onSubmit={handleSubmit(onSubmit)}>
        <S.SelectWrapper>
          <S.NormalName>Color</S.NormalName>
          <S.Select
            // id="color"
            // onChange={handleChange}
            {...register('color', { required: 'required' })}
          >
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
          <S.Select
            id="length"
            {...register('length', { required: 'required' })}
          >
            <S.Option value="">select an option</S.Option>
            {lengthOptions.map(option => (
              <S.Option key={option} value={option}>
                {option}
              </S.Option>
            ))}
          </S.Select>
        </S.SelectWrapper>
        {hasError && <span>This is required</span>}
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
          value={personalization}
          isOverLimit={isOverLimit}
          {...register('personalization')}
        />
        <S.TextRemaining>{1024 - personalization?.length}</S.TextRemaining>
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
