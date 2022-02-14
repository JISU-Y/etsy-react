import React from 'react';
import CircleCard from '../../components/CircleCard';
import * as S from './CircleCategory.style';

export interface List {
  imageUrl: string;
  title: string;
}

interface IProps {
  categoryList: List[];
  title: string;
  bgColor: 'white' | 'mint';
}

function CircleCategory({ title, bgColor, categoryList }: IProps) {
  // result 안에 data 안에 data(List 타입)가 있는 구조인데,
  // 제니릭으로 하면 result 자체가 List[] 타입을 갖게 됨
  // 그래서 return에서 props에 type 지정하도록 해놨는데 괜찮은지?
  return (
    <S.CircleCategoryContainer bgColor={bgColor}>
      <S.CircleCategoryWrap>
        <S.TopTitle>{title}</S.TopTitle>
        <S.CircleCardBox>
          {categoryList?.map(({ imageUrl, title }) => (
            <CircleCard key={title} title={title} image={imageUrl} />
          ))}
        </S.CircleCardBox>
      </S.CircleCategoryWrap>
    </S.CircleCategoryContainer>
  );
}

export default CircleCategory;
