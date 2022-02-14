import { useRequest } from '../../../hooks/useRequest';
import { tabProductListProps } from '../types';

function useUniqueList() {
  const data = useRequest<tabProductListProps>('uniqueList.json');

  return data;
}

export default useUniqueList;
