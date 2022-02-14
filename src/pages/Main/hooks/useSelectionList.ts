import { useRequest } from '../../../hooks/useRequest';
import { SelectionsList } from '../types';

function useSelectionList() {
  const { data } = useRequest<SelectionsList[]>('selectionsCategory.json');

  return data;
}

export default useSelectionList;
