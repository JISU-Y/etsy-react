import { useRequest } from '../../../hooks/useRequest';
import { TabProductList } from '../types';

function useUniqueList() {
  const { data, menu } = useRequest<TabProductList[]>('uniqueList.json');

  return { data, menu };
}

export default useUniqueList;
