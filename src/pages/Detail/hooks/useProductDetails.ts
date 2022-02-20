import { useEffect, useState } from 'react';
import { useRequest } from '../../../hooks/useRequest';
import { Details } from '../types/model';

function useProductDetails(id: number) {
  const { data } = useRequest<Details[]>('productDetails.json');
  const [selectedData, setSelectedData] = useState<Details>();

  useEffect(() => {
    if (!data) return;
    setSelectedData(data.filter(({ id: _id }) => _id === id)[0]);
  }, [data, id]);

  return selectedData;
}

export default useProductDetails;
