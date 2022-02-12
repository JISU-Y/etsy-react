import React, { useEffect, useRef, useState } from 'react';
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
  CircleCardBox,
  CircleCategoryContainer,
  CircleCategoryWrap,
  Container,
  ImageCardWrapper,
  PicksContainer,
  PicksWrapper,
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
  SVGWrapper,
  TabContents,
  TitleWrapper,
  TopTitle,
  UniqueContainer,
} from './Main.style';
import ArrowRight from '../../icons/ArrowRight';

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

  const imgCardWrapRef = useRef<HTMLDivElement>(null);

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
      <CircleCategoryContainer>
        <CircleCategoryWrap>
          <TopTitle>
            Find things you'll love. Support independent sellers. Only on Etsy.
          </TopTitle>
          <CircleCardBox>
            {circleData?.data.data.map(
              (el: { imageUrl: string; title: string }) => (
                <CircleCard
                  key={el.title}
                  title={el.title}
                  image={el.imageUrl}
                />
              )
            )}
          </CircleCardBox>
        </CircleCategoryWrap>
      </CircleCategoryContainer>
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
        <CircleCardBox>
          {pickCategoryData?.data.data.map(
            (el: { imageUrl: string; title: string }) => (
              <CircleCard key={el.title} title={el.title} image={el.imageUrl} />
            )
          )}
        </CircleCardBox>
      </CircleCategoryWrap>
      <PicksContainer>
        <PicksWrapper>
          {picksListData?.data.data.map(
            (
              el: { discout: number; imageUrl: string; price: number },
              index: number
            ) => (
              <ImageCardWrapper
                key={el.imageUrl}
                index={index}
                ref={imgCardWrapRef}
              >
                <ImageCard
                  width={imgCardWrapRef.current?.clientWidth ?? 250}
                  height={
                    100 *
                    (index === 0 || index === 2 || index === 5 || index === 7
                      ? 2
                      : 3)
                  }
                  price={el.price}
                  image={el.imageUrl}
                />
              </ImageCardWrapper>
            )
          )}
        </PicksWrapper>
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
        <TitleWrapper>
          <SectionTitle>Shop our selections</SectionTitle>
          <SVGWrapper>
            <ArrowRight width={14} height={28} color="black" />
          </SVGWrapper>
        </TitleWrapper>
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
