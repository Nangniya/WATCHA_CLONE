import * as S from './ErrorFallback.styles';

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <S.ErrorContainer>
    <S.ContentWrapper>
      <S.Title>문제가 발생했습니다</S.Title>
      <S.Message>{error.message}</S.Message>
      <S.RetryButton onClick={resetErrorBoundary}>다시 시도하기</S.RetryButton>
    </S.ContentWrapper>
  </S.ErrorContainer>
);
export default ErrorFallback;
