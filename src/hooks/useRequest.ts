import useSWR from 'swr';

interface DataResponse<T> {
  data: T;
  menu?: string[];
}

export function useRequest<T>(url: string) {
  const { data: result, error } = useSWR<DataResponse<T>>(url);

  // error 예외처리
  if (error) console.log(error);

  return { data: result?.data, menu: result?.menu };
}
