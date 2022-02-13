import React from 'react';
import { popularListProps } from '../../../../types';
import * as S from './PopularList.style';
import Card from '../../components/Card';

interface Props {
  list: popularListProps[];
  sectionTitle: string;
}

function PopularList({ sectionTitle, list }: Props) {
  return (
    <S.PopularContainer>
      <S.SectionTitle>{sectionTitle}</S.SectionTitle>
      <S.PopularBox>
        {list?.map(({ title, contentsUrl, price, reviews }) => (
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
