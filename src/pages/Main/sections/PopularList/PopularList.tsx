import React from 'react';
import { popularListProps } from '../../../../types';
import * as S from './PopularList.style';
import Card from '../../components/Card';
import usePopularList from '../../hooks/usePopularList';

interface Props {
  sectionTitle: string;
}

function PopularList({ sectionTitle }: Props) {
  const { result } = usePopularList();

  return (
    <S.PopularContainer>
      <S.SectionTitle>{sectionTitle}</S.SectionTitle>
      <S.PopularBox>
        {result?.data.data.map(
          ({ title, contentsUrl, price, reviews }: popularListProps) => (
            <Card
              key={title}
              width={250}
              height={200}
              image={contentsUrl}
              price={price}
              reviewCount={reviews}
              title={title}
            />
          )
        )}
      </S.PopularBox>
    </S.PopularContainer>
  );
}

export default PopularList;
