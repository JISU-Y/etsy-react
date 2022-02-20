import * as S from './Detail.style';
import { useLocation } from 'react-router-dom';
import ImageSection from './sections/ImageSection';
import useProductDetails from './hooks/useProductDetails';
import Header from '../../components/Header';
import SideInformation from './sections/SideInformation';
import ReviewSection from './sections/ReviewSection';

export default function Detail() {
  const {
    state: { id },
  } = useLocation<{ id: number }>();

  const data = useProductDetails(id);

  return (
    <S.Container>
      <Header />
      <S.DetailWrapper>
        <S.DetailLeft>
          <ImageSection images={data?.images} />
          {data && <ReviewSection reviewCount={data.itemReviews.length} />}
        </S.DetailLeft>
        <S.DetailRight>
          {data && <SideInformation details={data} image={data.images[0]} />}
        </S.DetailRight>
      </S.DetailWrapper>
    </S.Container>
  );
}
