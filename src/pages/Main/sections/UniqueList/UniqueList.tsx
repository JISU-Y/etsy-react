import React, { useEffect, useState } from 'react';
import TabMenu from '../../../../components/TabMenu';
import { tabProductListProps } from '../../../../types';
import ImageCard from '../../components/ImageCard';
import useUniqueList from '../../hooks/useUniqueList';
import * as S from './Unique.style';

function UniqueList() {
  const { result } = useUniqueList();
  const [currentTab, setCurrentTab] = useState(0);
  const [tabProductList, setTabProductList] = useState<tabProductListProps[]>(
    []
  );

  useEffect(() => {
    setTabProductList(
      result?.data.data.filter(
        (el: { category: string }) =>
          el.category === result?.data.menu[currentTab]
      )
    );
  }, [result, currentTab]);

  return (
    <S.UniqueContainer>
      <S.SectionTitle>Discover unique hand-picked items</S.SectionTitle>
      <TabMenu
        list={result?.data.menu}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <S.TabContents>
        {tabProductList?.map(({ imageUrl, price }) => (
          <ImageCard
            key={imageUrl}
            width={250}
            height={167}
            price={price}
            image={imageUrl}
          />
        ))}
      </S.TabContents>
    </S.UniqueContainer>
  );
}

export default UniqueList;
