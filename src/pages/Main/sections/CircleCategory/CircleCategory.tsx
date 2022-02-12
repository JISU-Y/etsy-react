import React from 'react';
import CircleCard from '../../components/CircleCard';
import * as S from './CircleCategory.style';

interface IProps {
  list: {
    imageUrl: string;
    title: string;
  }[];
  title: string;
  bgColor: 'white' | 'mint';
}

function CircleCategory({ title, list, bgColor }: IProps) {
  return (
    <S.CircleCategoryContainer bgColor={bgColor}>
      <S.CircleCategoryWrap>
        <S.TopTitle>{title}</S.TopTitle>
        <S.CircleCardBox>
          {list?.map(({ imageUrl, title }) => (
            <CircleCard key={title} title={title} image={imageUrl} />
          ))}
        </S.CircleCardBox>
      </S.CircleCategoryWrap>
    </S.CircleCategoryContainer>
  );
}

export default CircleCategory;
