import { useEffect, useState } from 'react';
import { useRequest } from '../../../hooks/useRequest';
import { RecentViewProps } from '../sections/RecentList/RecentList';

function useRecentView() {
  const { result } = useRequest('productList.json');
  const [recentViewsData, setRecentViewsData] = useState<RecentViewProps[]>();

  useEffect(() => {
    setRecentViewsData(
      result?.data.data.filter((el: { viewed: boolean }) => el.viewed)
    );
  }, [result?.data.data]);

  return { recentViewsData };
}

export default useRecentView;
