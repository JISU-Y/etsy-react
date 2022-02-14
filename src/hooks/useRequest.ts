import useSWR from 'swr';

export function useRequest(url: string) {
  const { data: result, error } = useSWR(url);

  // error 예외처리
  if (error) console.error(error);

  // result 예외처리
  if (!result) {
    console.error('no data response');
  }

  return { result };
}
