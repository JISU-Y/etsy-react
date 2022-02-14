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

  return (
    <S.UniqueContainer>
      <S.SectionTitle>Discover unique hand-picked items</S.SectionTitle>
      <TabMenu
        list={menu}
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
