import { useSearchParams } from 'react-router';

export const useSearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setSearchQuery = (query: string) => {
    if (query) {
      setSearchParams({ q: query });
    } else {
      searchParams.delete('q');
      setSearchParams(searchParams);
    }
  };

  return {
    query: searchParams.get('q') || '',
    setSearchQuery,
  };
};
