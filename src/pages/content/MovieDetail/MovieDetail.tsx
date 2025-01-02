import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/molecules/ErrorFallback/ErrorFallback';
import MovieDetailContent from './MovieDetailContent/MovieDetailContent';

const MovieDetail = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<p>Loading...</p>}>
        <MovieDetailContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MovieDetail;
