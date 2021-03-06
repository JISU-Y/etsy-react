import React from 'react';
import ArrowRight from '../../../../icons/ArrowRight';
import CategoryCard from '../../components/CategoryCard';
import useSelectionList from '../../hooks/useSelectionList';
import * as S from './SelectionList.style';
interface Props {
  sectionTitle: string;
}

function SelectionList({ sectionTitle }: Props) {
  const data = useSelectionList();

  return (
    <S.SelectionsContainer>
      <S.TitleWrapper>
        <S.SectionTitle>{sectionTitle}</S.SectionTitle>
        <S.SVGWrapper>
          <ArrowRight width={14} height={28} color="black" />
        </S.SVGWrapper>
      </S.TitleWrapper>
      <S.SectionDesc>
        Curated collections hand-picked by Etsy editors
      </S.SectionDesc>
      <S.SelectionsWrap>
        {data?.map(({ imageUrl, title }) => (
          <CategoryCard key={imageUrl} image={imageUrl} title={title} />
        ))}
      </S.SelectionsWrap>
    </S.SelectionsContainer>
  );
}

export default SelectionList;
