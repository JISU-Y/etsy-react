import { useRequest } from '../../../hooks/useRequest';

function useProductDetails() {
  const { result } = useRequest('productDetails.json');

  return { result };
}

export default useProductDetails;
