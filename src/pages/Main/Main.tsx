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
import {
  CircleCategoryWrap,
  Container,
  PicksContainer,
  PopularBox,
  PopularContainer,
  RecentLeft,
  RecentListWrap,
  RecentRight,
  RecentTitle,
  SectionDesc,
  SectionTitle,
  SelectionsContainer,
  SelectionsWrap,
  TabContents,
  TopTitle,
  UniqueContainer,
} from './Main.style';

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
    <Container>
      <Header />
      <TopTitle>
        Find things you'll love. Support independent sellers. Only on Etsy.
      </TopTitle>
      <CircleCategoryWrap>
        {circleData?.data.data.map(
          (el: { imageUrl: string; title: string }) => (
            <CircleCard key={el.title} title={el.title} image={el.imageUrl} />
          )
        )}
      </CircleCategoryWrap>
      <RecentListWrap>
        <RecentTitle>
          <RecentLeft>Recently viewed & more</RecentLeft>
          <RecentRight>Show more from the ivoryMR shop</RecentRight>
        </RecentTitle>
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
      </RecentListWrap>
      <TopTitle>Our picks for you</TopTitle>
      <CircleCategoryWrap>
        {pickCategoryData?.data.data.map(
          (el: { imageUrl: string; title: string }) => (
            <CircleCard key={el.title} title={el.title} image={el.imageUrl} />
          )
        )}
      </CircleCategoryWrap>
      <PicksContainer>
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
      </PicksContainer>
      <PopularContainer>
        <SectionTitle>Popular gifts right now</SectionTitle>
        <PopularBox>
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
        </PopularBox>
      </PopularContainer>
      <UniqueContainer>
        <SectionTitle>Discover unique hand-picked items</SectionTitle>
        <TabMenu
          list={uniqueListData?.data.menu}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <TabContents>
          {tabProductList?.map((el: tabProductListProps) => (
            <ImageCard
              key={el.imageUrl}
              width={250}
              height={167}
              price={el.price}
              image={el.imageUrl}
            />
          ))}
        </TabContents>
      </UniqueContainer>
      <SelectionsContainer>
        <SectionTitle>Shop our selections</SectionTitle>
        <SectionDesc>
          Curated collections hand-picked by Etsy editors
        </SectionDesc>
        <SelectionsWrap>
          {selectionsData?.data.data.map(
            (el: { imageUrl: string; title: string }) => (
              <CategoryCard
                key={el.imageUrl}
                image={el.imageUrl}
                title={el.title}
              />
            )
          )}
        </SelectionsWrap>
      </SelectionsContainer>
      <Footer />
    </Container>
  );
}

export default Main;
