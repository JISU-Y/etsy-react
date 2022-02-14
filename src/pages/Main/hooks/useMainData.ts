import { useEffect } from 'react';
import { useRequest } from '../../../hooks/useRequest';

function useMainData() {
  const { result: circleData } = useRequest('searchBubbles.json');
  const { result: productData } = useRequest('productList.json');
  const { result: pickCategoryData } = useRequest('picksCategories.json');
  const { result: picksListData } = useRequest('picksList.json');
  const { result: popularData } = useRequest('popularList.json');
  const { result: uniqueListData } = useRequest('uniqueList.json');
  const { result: selectionsData } = useRequest('selectionsCategory.json');

  // 파싱, 조건부처리..

  useEffect(() => {
    productData?.data.data.filter((el: { viewed: boolean }) => el.viewed);
  }, []);

  return {
    circleData,
    productData,
    pickCategoryData,
    picksListData,
    popularData,
    uniqueListData,
    selectionsData,
  };
}

export default useMainData;
