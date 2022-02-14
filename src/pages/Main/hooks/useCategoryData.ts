import { useRequest } from '../../../hooks/useRequest';
import { List } from '../sections/CircleCategory/CircleCategory';

function useCategoryData() {
  const topCategoryData = useRequest<List>('searchBubbles.json');
  const pickCategoryData = useRequest<List>('picksCategories.json');

  return {
    topCategoryData,
    pickCategoryData,
  };
}

export default useCategoryData;
