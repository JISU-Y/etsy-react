import React from 'react';
import ArrowRight from '../../../../icons/ArrowRight';
import CategoryCard from '../../components/CategoryCard';
import useSelectionList from '../../hooks/useSelectionList';
import * as S from './SelectionList.style';

interface SelectionsListProps {
  imageUrl: string;
  title: string;
}
interface Props {
  sectionTitle: string;
}

function SelectionList({ sectionTitle }: Props) {
  const { result } = useSelectionList();

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
        {result?.data.data.map(({ imageUrl, title }: SelectionsListProps) => (
          <CategoryCard key={imageUrl} image={imageUrl} title={title} />
        ))}
      </S.SelectionsWrap>
    </S.SelectionsContainer>
  );
}

export default SelectionList;
