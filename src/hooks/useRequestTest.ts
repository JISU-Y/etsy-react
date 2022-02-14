import useSWR from 'swr';

interface DataResponse<T> {
  data: { data: T[] };
}

export function useRequestTest<T>(url: string) {
  const { data, error } = useSWR<DataResponse<T>, any>(url);

  // error 예외처리
  if (error) console.error(error);

  // result 예외처리 (fetching 중)
  if (!data) {
    console.log('no data response');
  }

  return data?.data?.data;
}
