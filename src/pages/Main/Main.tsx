import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { productListProps } from '../../types';
import * as S from './Main.style';
import CircleCategory from './sections/CircleCategory';
import RecentList from './sections/RecentList';
import OurPicksList from './sections/OurPicksList';
import PopularList from './sections/PopularList';
import UniqueList from './sections/UniqueList';
import SelectionList from './sections/SelectionList';
import useMainData from './hooks/useMainData';
import LazyLoad from 'react-lazyload';

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

  // TODO: props로 보낸 data 해당 컴포넌트 안에서 use swr hook호출해 바로 소비하는 패턴으로 리팩토링.

  const [viewedProductList, setViewedProductList] = useState<
    productListProps[]
  >([]);

  useEffect(() => {
    setViewedProductList(
      productData?.data.data.filter((el: { viewed: boolean }) => el.viewed)
    );
  }, [productData]);

  return (
    <S.Container>
      <Header />
      <CircleCategory
        title={`Find things you'll love. Support independent sellers. Only on Etsy.`}
        list={circleData?.data.data}
        bgColor="mint"
      />
      {productData && <RecentList list={viewedProductList} />}
      <CircleCategory
        title={`Our picks for you`}
        list={pickCategoryData?.data.data}
        bgColor="white"
      />
      <OurPicksList list={picksListData?.data.data} />
      <PopularList
        sectionTitle="Popular gifts right now"
        list={popularData?.data.data}
      />
      <LazyLoad>
        <UniqueList
          tabMenuList={uniqueListData?.data.menu}
          list={uniqueListData}
        />
        <SelectionList
          sectionTitle="Shop our selections"
          list={selectionsData?.data.data}
        />
      </LazyLoad>
      <Footer />
    </S.Container>
  );
}

export default Main;
