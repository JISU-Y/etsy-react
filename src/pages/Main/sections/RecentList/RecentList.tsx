import { useHistory } from 'react-router-dom';
import { productListProps } from '../../../../types';
import ImageCard from '../../components/ImageCard';
import * as S from './RecentList.style';

interface Props {
  list: productListProps[];
}

function RecentList({ list }: Props) {
  const history = useHistory();

  const goToDetail = (id: number) => history.push(`/detail/${id}`, { id });

  return (
    <S.RecentListWrap>
      <S.RecentTitle>
        <S.RecentLeft>Recently viewed & more</S.RecentLeft>
        <S.RecentRight>Show more from the ivoryMR shop</S.RecentRight>
      </S.RecentTitle>
      {list?.map(({ id, price, imageUrl }) => (
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
