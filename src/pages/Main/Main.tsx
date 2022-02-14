import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as S from './Main.style';
import CircleCategory from './sections/CircleCategory';
import RecentList from './sections/RecentList';
import OurPicksList from './sections/OurPicksList';
import PopularList from './sections/PopularList';
import UniqueList from './sections/UniqueList';
import SelectionList from './sections/SelectionList';
import LazyLoad from 'react-lazyload';
import useCategoryData from './hooks/useCategoryData';

function Main() {
  const { topCategoryData, pickCategoryData } = useCategoryData();

  return (
    <S.Container>
      <Header />
      <CircleCategory
        title={`Find things you'll love. Support independent sellers. Only on Etsy.`}
        categoryList={topCategoryData}
        bgColor="mint"
      />
      <RecentList />
      <CircleCategory
        title={`Our picks for you`}
        categoryList={pickCategoryData}
        bgColor="white"
      />
      <OurPicksList />
      <LazyLoad>
        <PopularList sectionTitle="Popular gifts right now" />
        <UniqueList />
        <SelectionList sectionTitle="Shop our selections" />
      </LazyLoad>
      <Footer />
    </S.Container>
  );
}

export default Main;
