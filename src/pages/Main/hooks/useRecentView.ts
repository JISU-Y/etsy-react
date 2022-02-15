import { useEffect, useState } from 'react';
import { useRequest } from '../../../hooks/useRequest';
import { ProductList } from '../types';

function useRecentView() {
  const { data } = useRequest<ProductList[]>('productList.json');
  const [recentViewsData, setRecentViewsData] = useState<ProductList[]>();

  useEffect(() => {
    setRecentViewsData(data?.filter(({ viewed }) => viewed));
  }, [data]);

  return { recentViewsData };
}

export default useRecentView;
