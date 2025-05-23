import { Suspense } from 'react';
import { useParams } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/molecules/ErrorFallback/ErrorFallback';
import MovieDetailContent from './MovieDetailContent/MovieDetailContent';
import { LoadingSpinner } from '@nangniya/ui';
import * as S from './MovieDetail.styles';

const MovieDetail = () => {
  const { movieId } = useParams<{ movieId: string }>();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense
        fallback={
          <S.LoadingContainer>
            <LoadingSpinner />
          </S.LoadingContainer>
        }
      >
        <MovieDetailContent movieId={Number(movieId)} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MovieDetail;
