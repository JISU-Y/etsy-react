import React from 'react';
import * as S from './Detail.style';
import { useLocation } from 'react-router-dom';
import ImageSection from './sections/ImageSection';
import useProductDetails from './hooks/useProductDetails';
import Header from '../../components/Header';
import SideInformation from './sections/SideInformation';
import ReviewSection from './sections/ReviewSection';

export default function Detail() {
  const {
    state: { id },
  } = useLocation<{ id: number }>();

  const data = useProductDetails(id);

  return (
    <S.Container>
      <Header />
      <S.DetailWrapper>
        <S.DetailLeft>
          <ImageSection images={data?.images} />
          {data && <ReviewSection reviewCount={data.itemReviews.length} />}
        </S.DetailLeft>
        <S.DetailRight>
          {data && (
            <SideInformation
              provider={data.provider}
              title={data.title}
              sold={data.sold}
              price={data.price}
              finishOptions={data.finishOptions}
              lengthOptions={data.lengthOptions}
              image={data.images[0]}
              discount={data.discount}
              id={id}
            />
          )}
        </S.DetailRight>
      </S.DetailWrapper>
    </S.Container>
  );
}
