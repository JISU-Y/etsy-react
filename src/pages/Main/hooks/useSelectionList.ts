import { useRequest } from '../../../hooks/useRequest';

function useSelectionList() {
  const { result } = useRequest('selectionsCategory.json');

  return {
    result,
  };
}

export default useSelectionList;
