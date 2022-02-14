import { useRequest } from '../../../hooks/useRequest';

function useCategoryData() {
  const { result: topCategoryData } = useRequest('searchBubbles.json');
  const { result: pickCategoryData } = useRequest('picksCategories.json');

  return {
    topCategoryData,
    pickCategoryData,
  };
}

export default useCategoryData;
