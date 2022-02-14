import { useRequest } from '../../../hooks/useRequest';
import { Details } from '../types/model';

function useProductDetails() {
  const data = useRequest<Details[]>('productDetails.json');

  return data;
}

export default useProductDetails;
