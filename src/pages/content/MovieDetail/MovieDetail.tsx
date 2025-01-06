import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/molecules/ErrorFallback/ErrorFallback';
import MovieDetailContent from './MovieDetailContent/MovieDetailContent';
import LoadingSpinner from '@/components/atoms/LoadingSpinner/LoadingSpinner';
import * as S from './MovieDetail.styles';

const MovieDetail = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense
        fallback={
          <S.LoadingContainer>
            <LoadingSpinner />
          </S.LoadingContainer>
        }
      >
        <MovieDetailContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MovieDetail;
