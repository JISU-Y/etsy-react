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
  // CircleCategory는 두번 쓰이는데, 안에 listing 되는 내용 말고는 완전히 같아서
  // main에서 한꺼번에 받아서 각 컴포넌트에 전달하려고 하는데 괜찮을지?
  const { topCategoryData, pickCategoryData } = useCategoryData();

  return (
    <S.Container>
      <Header />
      <CircleCategory
        title={`Find things you'll love. Support independent sellers. Only on Etsy.`}
        categoryList={topCategoryData?.data}
        bgColor="mint"
      />
      <RecentList />
      <CircleCategory
        title={`Our picks for you`}
        categoryList={pickCategoryData?.data}
        bgColor="white"
      />
      <OurPicksList />
      <PopularList sectionTitle="Popular gifts right now" />
      <LazyLoad>
        <UniqueList />
        <SelectionList sectionTitle="Shop our selections" />
      </LazyLoad>
      <Footer />
    </S.Container>
  );
}

export default Main;
