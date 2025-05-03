import { Suspense } from 'react';
import { useSearchParams } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { Skeleton } from '@nangniya/ui';
import ErrorFallback from '@/components/molecules/ErrorFallback/ErrorFallback';
import SearchContent from './SearchContent/SearchContent';
import * as S from './Search.styles';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <S.Container>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense
          fallback={
            <S.SkeletonContainer>
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Skeleton key={`skeleton-${i}`} width={200} height={300} />
                ))}
            </S.SkeletonContainer>
          }
        >
          <SearchContent query={query} />
        </Suspense>
      </ErrorBoundary>
    </S.Container>
  );
};

export default Search;
