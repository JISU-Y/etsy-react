import { useRequest } from '../../../hooks/useRequest';
import { OurPicksProps } from '../sections/OurPicksList/OurPicksList';

function usePicksList() {
  const data = useRequest<OurPicksProps>('picksList.json');

  return data;
}

export default usePicksList;
