import React from 'react';
import ImageCard from '../../components/ImageCard';
import * as S from './OurPicksList.style';

interface Props {
  list: { imageUrl: string; price: number; discount: number }[];
}

function OurPicksList({ list }: Props) {
  return (
    <S.PicksContainer>
      <S.PicksWrapper>
        {list?.map(({ imageUrl, price, discount }, index: number) => (
          <S.ImageCardWrapper key={imageUrl} index={index}>
            <ImageCard width={0} height={0} price={price} image={imageUrl} />
          </S.ImageCardWrapper>
        ))}
      </S.PicksWrapper>
    </S.PicksContainer>
  );
}

export default OurPicksList;
