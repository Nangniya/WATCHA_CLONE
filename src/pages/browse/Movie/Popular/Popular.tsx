import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Skeleton from '@/components/atoms/Skeleton/Skeleton';
import ErrorFallback from '@/components/molecules/ErrorFallback/ErrorFallback';
import PopularContent from './PopularContent/PopularContent';
import * as S from './Popular.styles';

const Popular = () => {
  return (
    <S.Container>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense
          fallback={
            <S.SkeletonContainer>
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Skeleton width={300} height={200} key={`skeleton-${i}`} />
                ))}
            </S.SkeletonContainer>
          }
        >
          <PopularContent />
        </Suspense>
      </ErrorBoundary>
    </S.Container>
  );
};

export default Popular;
