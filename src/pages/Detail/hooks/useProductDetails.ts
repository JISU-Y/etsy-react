import { useRequest } from '../../../hooks/useRequest';
import { DetailsProps } from '../Detail';

function useProductDetails() {
  const data = useRequest<DetailsProps>('productDetails.json');

  return data;
}

export default useProductDetails;
