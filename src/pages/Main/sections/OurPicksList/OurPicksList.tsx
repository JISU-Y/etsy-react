import React from 'react';
import ImageCard from '../../components/ImageCard';
import usePicksList from '../../hooks/usePicksList';
import * as S from './OurPicksList.style';

function OurPicksList() {
  const data = usePicksList();

  return (
    <S.PicksContainer>
      <S.PicksWrapper>
        {data?.map(({ imageUrl, price, discount }, index) => (
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
        ))}
      </S.PicksWrapper>
    </S.PicksContainer>
  );
}

export default OurPicksList;
