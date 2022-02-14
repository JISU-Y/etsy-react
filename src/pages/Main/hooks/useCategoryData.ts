import { useRequest } from '../../../hooks/useRequest';
import { CategoryList } from '../types';

function useCategoryData() {
  const { data: topCategoryData } =
    useRequest<CategoryList[]>('searchBubbles.json');
  const { data: pickCategoryData } = useRequest<CategoryList[]>(
    'picksCategories.json'
  );

  return {
    topCategoryData,
    pickCategoryData,
  };
}

export default useCategoryData;
