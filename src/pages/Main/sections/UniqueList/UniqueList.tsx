import React, { useEffect, useState } from 'react';
import TabMenu from '../../../../components/TabMenu';
import ImageCard from '../../components/ImageCard';
import useUniqueList from '../../hooks/useUniqueList';
import { TabProductList } from '../../types';
import * as S from './Unique.style';

function UniqueList() {
  const { data, menu } = useUniqueList();
  const [currentTab, setCurrentTab] = useState(0);
  const [tabProductList, setTabProductList] = useState<TabProductList[]>([]);

  useEffect(() => {
    // Refactor: 조금 더 명시적인 네이밍을 써주면 좋을 것 같아요.
    const currentTabMenu =
      data?.filter(({ category }) => category === menu!![currentTab]) || [];

    setTabProductList(currentTabMenu);
  }, [data, currentTab]);

  const handleCurrentTab = (tab: number) => setCurrentTab(tab);

  return (
    <S.UniqueContainer>
      <S.SectionTitle>Discover unique hand-picked items</S.SectionTitle>
      <TabMenu
        list={menu}
        currentTab={currentTab}
        handleTab={handleCurrentTab}
      />
      <S.TabContents>
        {tabProductList?.map(({ imageUrl, price }) => (
          <S.ImageCardWrapper key={imageUrl}>
            <ImageCard
              width="100%"
              height="100%"
              price={price}
              image={imageUrl}
            />
          </S.ImageCardWrapper>
        ))}
      </S.TabContents>
    </S.UniqueContainer>
  );
}

export default UniqueList;
