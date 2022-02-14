import React from 'react';
import ImageCard from '../../components/ImageCard';
import usePicksList from '../../hooks/usePicksList';
import * as S from './OurPicksList.style';

export interface OurPicksProps {
  imageUrl: string;
  price: number;
  discount: number;
}

function OurPicksList() {
  const { result } = usePicksList();

  return (
    <S.PicksContainer>
      <S.PicksWrapper>
        {result?.data.data.map(
          ({ imageUrl, price, discount }: OurPicksProps, index: number) => (
            <S.ImageCardWrapper key={imageUrl} index={index}>
              <ImageCard
                width={250}
                height={
                  100 *
                  (index === 0 || index === 2 || index === 5 || index === 7
                    ? 2
                    : 3)
                }
                price={price}
                image={imageUrl}
              />
            </S.ImageCardWrapper>
          )
        )}
      </S.PicksWrapper>
    </S.PicksContainer>
  );
}

export default OurPicksList;
