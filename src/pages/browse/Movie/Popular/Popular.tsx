import { Suspense } from 'react';
import Skeleton from '@/components/atoms/Skeleton/Skeleton';
import PopularContent from './PopularContent/PopularContent';
import * as S from './Popular.styles';

const Popular = () => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

export default Popular;
