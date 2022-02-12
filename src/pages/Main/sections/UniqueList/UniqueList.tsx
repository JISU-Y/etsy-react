import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import TabMenu from '../../../../components/TabMenu';
import { tabProductListProps } from '../../../../types';
import ImageCard from '../../components/ImageCard';
import * as S from './Unique.style';

interface Props {
  tabMenuList: string[];
  list: AxiosResponse<any, any> | undefined;
}

function UniqueList({ tabMenuList, list }: Props) {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabProductList, setTabProductList] = useState<tabProductListProps[]>(
    []
  );

  useEffect(() => {
    setTabProductList(
      list?.data.data.filter(
        (el: { category: string }) =>
          el.category === list?.data.menu[currentTab]
      )
    );
  }, [list, currentTab]);

  return (
    <S.UniqueContainer>
      <S.SectionTitle>Discover unique hand-picked items</S.SectionTitle>
      <TabMenu
        list={tabMenuList}
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
