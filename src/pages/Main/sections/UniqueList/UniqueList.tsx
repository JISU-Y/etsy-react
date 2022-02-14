import React, { useEffect, useState } from 'react';
import TabMenu from '../../../../components/TabMenu';
import ImageCard from '../../components/ImageCard';
import useUniqueList from '../../hooks/useUniqueList';
import { tabProductListProps } from '../../types';
import * as S from './Unique.style';

function UniqueList() {
  const data = useUniqueList();
  const [currentTab, setCurrentTab] = useState(0);
  const [tabProductList, setTabProductList] = useState<
    tabProductListProps[] | undefined
  >([]);
  console.log(data);

  useEffect(() => {
    setTabProductList(
      data?.data?.filter(({ category }) => category === data?.menu[currentTab])
    );
  }, [data, currentTab]);

  return (
    <S.UniqueContainer>
      <S.SectionTitle>Discover unique hand-picked items</S.SectionTitle>
      <TabMenu
        list={data?.menu}
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
