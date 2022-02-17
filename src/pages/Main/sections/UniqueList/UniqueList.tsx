import React, { useEffect, useState } from 'react';
import TabMenu from '../../../../components/TabMenu';
import ImageCard from '../../components/ImageCard';
import useUniqueList from '../../hooks/useUniqueList';
import { TabProductList } from '../../types';
import * as S from './Unique.style';

function UniqueList() {
  const { data, menu } = useUniqueList();
  const [currentTab, setCurrentTab] = useState(0);
  const [tabProductList, setTabProductList] = useState<
    TabProductList[] | undefined
  >([]);

  useEffect(() => {
    setTabProductList(
      data?.filter(({ category }) => category === menu!![currentTab])
    );
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
        {tabProductList?.map(({ imageUrl, price }, index) => (
          <S.ImageCardWrapper
            key={imageUrl}
            index={index}
            className={S.gridIndex[index]}
          >
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
