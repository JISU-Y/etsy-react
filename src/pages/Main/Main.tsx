import React, { useEffect, useState } from 'react';
import TabMenu from '../../components/TabMenu';
import Card from './components/Card/Card';
import CategoryCard from './components/CategoryCard';
import CircleCard from './components/CircleCard';
import ImageCard from './components/ImageCard';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useMainData from '../../hooks/useMainData';
import {
  popularListProps,
  productListProps,
  tabProductListProps,
} from '../../types';
import * as S from './Main.style';

function Main() {
  const {
    circleData,
    productData,
    pickCategoryData,
    picksListData,
    popularData,
    uniqueListData,
    selectionsData,
  } = useMainData();
  const [currentTab, setCurrentTab] = useState(0);
  const [viewedProductList, setViewedProductList] = useState<
    productListProps[]
  >([]);
  const [tabProductList, setTabProductList] = useState<tabProductListProps[]>(
    []
  );
  const history = useHistory();

  const goToDetail = (id: number) => history.push(`/detail/${id}`, { id });

  useEffect(() => {
    setViewedProductList(
      productData?.data.data.filter((el: { viewed: boolean }) => el.viewed)
    );
  }, [productData]);

  useEffect(() => {
    setTabProductList(
      uniqueListData?.data.data.filter(
        (el: { category: string }) =>
          el.category === uniqueListData?.data.menu[currentTab]
      )
    );
  }, [uniqueListData, currentTab]);

  return (
    <S.Container>
      <Header />
      <S.TopTitle>
        Find things you'll love. Support independent sellers. Only on Etsy.
      </S.TopTitle>
      <S.CircleCategoryWrap>
        {circleData?.data.data.map(
          (el: { imageUrl: string; title: string }) => (
            <CircleCard key={el.title} title={el.title} image={el.imageUrl} />
          )
        )}
      </S.CircleCategoryWrap>
      <S.RecentListWrap>
        <S.RecentTitle>
          <S.RecentLeft>Recently viewed & more</S.RecentLeft>
          <S.RecentRight>Show more from the ivoryMR shop</S.RecentRight>
        </S.RecentTitle>
        {viewedProductList?.map((el: productListProps) => (
          <ImageCard
            key={el.id}
            width={250}
            height={167}
            price={el.price}
            image={el.imageUrl}
            onClick={() => goToDetail(el.id)}
          />
        ))}
      </S.RecentListWrap>
      <S.TopTitle>Our picks for you</S.TopTitle>
      <S.CircleCategoryWrap>
        {pickCategoryData?.data.data.map(
          (el: { imageUrl: string; title: string }) => (
            <CircleCard key={el.title} title={el.title} image={el.imageUrl} />
          )
        )}
      </S.CircleCategoryWrap>
      <S.PicksContainer>
        {picksListData?.data.data.map(
          (el: { discout: number; imageUrl: string; price: number }) => (
            <ImageCard
              key={el.imageUrl}
              width={250}
              height={167}
              price={el.price}
              image={el.imageUrl}
            />
          )
        )}
      </S.PicksContainer>
      <S.PopularContainer>
        <S.SectionTitle>Popular gifts right now</S.SectionTitle>
        <S.PopularBox>
          {popularData?.data.data.map((el: popularListProps) => (
            <Card
              key={el.title}
              width={250}
              height={200}
              image={el.contentsUrl}
              price={el.price}
              reviewCount={el.reviews}
              title={el.title}
            />
          ))}
        </S.PopularBox>
      </S.PopularContainer>
      <S.UniqueContainer>
        <S.SectionTitle>Discover unique hand-picked items</S.SectionTitle>
        <TabMenu
          list={uniqueListData?.data.menu}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <S.TabContents>
          {tabProductList?.map((el: tabProductListProps) => (
            <ImageCard
              key={el.imageUrl}
              width={250}
              height={167}
              price={el.price}
              image={el.imageUrl}
            />
          ))}
        </S.TabContents>
      </S.UniqueContainer>
      <S.SelectionsContainer>
        <S.SectionTitle>Shop our selections</S.SectionTitle>
        <S.SectionDesc>
          Curated collections hand-picked by Etsy editors
        </S.SectionDesc>
        <S.SelectionsWrap>
          {selectionsData?.data.data.map(
            (el: { imageUrl: string; title: string }) => (
              <CategoryCard
                key={el.imageUrl}
                image={el.imageUrl}
                title={el.title}
              />
            )
          )}
        </S.SelectionsWrap>
      </S.SelectionsContainer>
      <Footer />
    </S.Container>
  );
}

export default Main;
