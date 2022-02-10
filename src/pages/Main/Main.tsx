import React from 'react';
import TabMenu from '../../components/TabMenu';
import Card from './components/Card';
import CategoryCard from './components/CategoryCard';
import CircleCard from './components/CircleCard';
import ImageCard from './components/ImageCard';
import styled from 'styled-components';
import useSWR from 'swr';
import {
  getPicksCategories,
  getProductList,
  getSearchBubbles,
  getPopularList,
  getUniqueList,
  getSelectionsCategories,
} from '../../utils/axios';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Main() {
  const { data: circleData } = useSWR('searchBubbles.json', url =>
    getSearchBubbles(url)
  );
  const { data: productData } = useSWR('productList.json', url =>
    getProductList(url)
  );
  const { data: pickCategoryData } = useSWR('picksCategories.json', url =>
    getPicksCategories(url)
  );
  const { data: picksListData } = useSWR('picksList.json', url =>
    getPicksCategories(url)
  );
  const { data: popularData } = useSWR('popularList.json', url =>
    getPopularList(url)
  );
  const { data: uniqueListData } = useSWR('uniqueList.json', url =>
    getUniqueList(url)
  );
  const { data: selectionsData } = useSWR('selectionsCategory.json', url =>
    getSelectionsCategories(url)
  );
  const [currentTab, setCurrentTab] = React.useState(0);
  const history = useHistory();

  if (
    !circleData ||
    !productData ||
    !pickCategoryData ||
    !picksListData ||
    !popularData ||
    !uniqueListData ||
    !selectionsData
  ) {
    return <div>...loading</div>;
  }

  const goToDetail = (id: number) => history.push(`/detail/${id}`, { id });

  return (
    <Container>
      <Header />
      <h1>
        Find things you'll love. Support independent sellers. Only on Etsy.
      </h1>
      <CircleCategoryWrap>
        {circleData.data.data.map((el: { imageUrl: string; title: string }) => (
          <CircleCard key={el.title} title={el.title} image={el.imageUrl} />
        ))}
      </CircleCategoryWrap>

      <RecentListWrap>
        <RecentTitle>
          <p>Recently viewed & more</p>
          <span>Show more from the ivoryMR shop</span>
        </RecentTitle>
        {productData.data.data
          .filter((el: { viewed: boolean }) => el.viewed)
          .map(
            (el: {
              discout: number;
              imageUrl: string;
              price: number;
              quickDelivery: boolean;
              viewed: boolean;
              id: number;
            }) => (
              <ImageCard
                key={el.id}
                width={250}
                height={167}
                price={el.price}
                image={el.imageUrl}
                onClick={() => goToDetail(el.id)}
              />
            )
          )}
      </RecentListWrap>

      <h1>Our picks for you</h1>
      <CircleCategoryWrap>
        {pickCategoryData.data.data.map(
          (el: { imageUrl: string; title: string }) => (
            <CircleCard key={el.title} title={el.title} image={el.imageUrl} />
          )
        )}
      </CircleCategoryWrap>
      <PicksContainer>
        {picksListData.data.data.map(
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
        <h2>Popular gifts right now</h2>
        <div>
          {popularData.data.data.map(
            (el: {
              contentsUrl: string;
              price: number;
              discount: number;
              freeShipping: boolean;
              title: string;
              reviews: number;
            }) => (
              <Card
                key={el.title}
                width={250}
                height={200}
                image={el.contentsUrl}
                price={el.price}
                reviewCount={el.reviews}
                title={el.title}
              />
            )
          )}
        </div>
      </PopularContainer>

      <UniqueContainer>
        <TabMenu
          list={uniqueListData.data.menu}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <TabContents>
          {uniqueListData.data.data
            .filter(
              (el: { category: string }) =>
                el.category === uniqueListData.data.menu[currentTab]
            )
            .map(
              (el: {
                category: string;
                imageUrl: string;
                price: number;
                discount: boolean;
                quickDelivery: boolean;
              }) => (
                <ImageCard
                  key={el.imageUrl}
                  width={250}
                  height={167}
                  price={el.price}
                  image={el.imageUrl}
                />
              )
            )}
        </TabContents>
      </UniqueContainer>

      <SelectionsContainer>
        <h2>Shop our selections</h2>
        <p>Curated collections hand-picked by Etsy editors</p>
        <SelectionsWrap>
          {selectionsData.data.data.map(
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 40px;
    text-align: center;
  }
  h2 {
    font-size: 28px;
    font-weight: bold;
    padding: 0 9px;
  }
`;

const CircleCategoryWrap = styled.div`
  display: flex;
  gap: 60px;
  padding: 9px;
`;

const RecentListWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1400px;
  gap: 18px;
`;

const RecentTitle = styled.div`
  display: flexbox;
  justify-content: space-between;
  width: 100%;
  p {
    font-size: 16px;
    font-weight: bold;
  }
  span {
    font-size: 13px;
    color: gray;
  }
`;

const PicksContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 18px;
  column-gap: 18px;
  & div {
    display: flex;
    justify-content: center;
  }
`;

const PopularContainer = styled.div`
  padding: 9px;

  & > div {
    display: flex;
  }
`;

const UniqueContainer = styled.div`
  width: 1000px;
`;

const TabContents = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;

const SelectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    display: inline-block;
    cursor: pointer;
  }
  h2::after {
    content: '->';
    margin-left: 10px;
    transition: all 0.3s ease-in;
  }
  h2:hover::after {
    margin-left: 15px;
  }
  & > p {
    font-size: 16px;
    color: gray;
  }
`;

const SelectionsWrap = styled.div`
  display: flex;
  gap: 18px;
`;

export default Main;
