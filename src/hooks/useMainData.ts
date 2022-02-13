import { AxiosResponse } from 'axios';
import useSWR from 'swr';
import { getData } from '../utils/axios';

// swr custom hook으로 만드는 부분은 너무 모르겠습니다..

function useMainData() {
  const { data: circleData, error: circleError } = useSWR<
    AxiosResponse<any, any> | undefined
  >('searchBubbles.json', url => getData(url));
  const { data: productData, error: productError } = useSWR<
    AxiosResponse<any, any> | undefined
  >('productList.json', url => getData(url));
  const { data: pickCategoryData, error: pickCategoryError } = useSWR<
    AxiosResponse<any, any> | undefined
  >('picksCategories.json', url => getData(url));
  const { data: picksListData, error: picksListError } = useSWR<
    AxiosResponse<any, any> | undefined
  >('picksList.json', url => getData(url));
  const { data: popularData, error: popularError } = useSWR<
    AxiosResponse<any, any> | undefined
  >('popularList.json', url => getData(url));
  const { data: uniqueListData, error: uniqueListError } = useSWR<
    AxiosResponse<any, any> | undefined
  >('uniqueList.json', url => getData(url));
  const { data: selectionsData, error: selectionsError } = useSWR<
    AxiosResponse<any, any> | undefined
  >('selectionsCategory.json', url => getData(url));

  //   if (
  //     circleError ||
  //     productError ||
  //     pickCategoryError ||
  //     picksListError ||
  //     popularError ||
  //     uniqueListError ||
  //     selectionsError
  //   ) {
  //     return new Error('Error ocurred during data fetching');
  //   }

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
