import { useHistory } from 'react-router-dom';
import ImageCard from '../../components/ImageCard';
import useRecentView from '../../hooks/useRecentView';
import * as S from './RecentList.style';

function RecentList() {
  const { recentViewsData } = useRecentView();
  const history = useHistory();

  const goToDetail = (id: number) => history.push(`/detail/${id}`, { id });

  return (
    <S.RecentListWrap>
      <S.RecentTitle>
        <S.RecentLeft>
          Recently viewed & more (요소 클릭 시 디테일 페이지로 이동)
        </S.RecentLeft>
        <S.RecentRight>Show more from the ivoryMR shop</S.RecentRight>
      </S.RecentTitle>
      {recentViewsData?.map(({ id, price, imageUrl }) => (
        <ImageCard
          key={id}
          width={250}
          height={167}
          price={price}
          image={imageUrl}
          onClick={() => goToDetail(id)}
        />
      ))}
    </S.RecentListWrap>
  );
}

export default RecentList;
