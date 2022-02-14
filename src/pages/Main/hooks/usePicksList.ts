import { useRequest } from '../../../hooks/useRequest';

function usePicksList() {
  const { result } = useRequest('picksList.json');

  return { result };
}

export default usePicksList;
