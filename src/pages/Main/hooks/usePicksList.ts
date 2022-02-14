import { useRequest } from '../../../hooks/useRequest';
import { OurPicks } from '../types';

function usePicksList() {
  const { data } = useRequest<OurPicks[]>('picksList.json');

  return data;
}

export default usePicksList;
