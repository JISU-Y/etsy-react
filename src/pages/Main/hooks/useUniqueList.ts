import { useRequest } from '../../../hooks/useRequest';

function useUniqueList() {
  const { result } = useRequest('uniqueList.json');

  return {
    result,
  };
}

export default useUniqueList;
