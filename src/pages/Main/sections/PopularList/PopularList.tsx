import React from 'react';
import * as S from './PopularList.style';
import Card from '../../components/Card';
import usePopularList from '../../hooks/usePopularList';

interface Props {
  sectionTitle: string;
}

function PopularList({ sectionTitle }: Props) {
  const data = usePopularList();

  return (
    <S.PopularContainer>
      <S.SectionTitle>{sectionTitle}</S.SectionTitle>
      <S.PopularBox>
        {data?.map(({ title, contentsUrl, price, reviews }) => (
          <Card
            key={title}
            width={250}
            height={200}
            image={contentsUrl}
            price={price}
            reviewCount={reviews}
            title={title}
          />
        ))}
      </S.PopularBox>
    </S.PopularContainer>
  );
}

export default PopularList;
