import { useRequest } from '../../../hooks/useRequest';
import { popularListProps } from '../types';

function usePopularList() {
  const data = useRequest<popularListProps>('popularList.json');

  return data;
}

export default usePopularList;
