import { useEffect, useState } from 'react';
import { useRequest } from '../../../hooks/useRequest';
import { productListProps } from '../types';

function useRecentView() {
  const data = useRequest<productListProps>('productList.json');
  const [recentViewsData, setRecentViewsData] = useState<productListProps[]>();

  useEffect(() => {
    setRecentViewsData(data?.data.filter(({ viewed }) => viewed));
  }, [data]);

  return { recentViewsData };
}

export default useRecentView;
