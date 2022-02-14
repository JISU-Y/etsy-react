import { useRequest } from '../../../hooks/useRequest';
import { PopularList } from '../types';

function usePopularList() {
  const { data } = useRequest<PopularList[]>('popularList.json');

  return data;
}

export default usePopularList;
