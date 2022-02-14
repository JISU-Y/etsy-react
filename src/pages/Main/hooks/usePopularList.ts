import { useRequest } from '../../../hooks/useRequest';

function usePopularList() {
  const { result } = useRequest('popularList.json');

  return { result };
}

export default usePopularList;
