import { useRequest } from '../../../hooks/useRequest';
import { SelectionsListProps } from '../sections/SelectionList/SelectionList';

function useSelectionList() {
  const data = useRequest<SelectionsListProps>('selectionsCategory.json');

  return data;
}

export default useSelectionList;
