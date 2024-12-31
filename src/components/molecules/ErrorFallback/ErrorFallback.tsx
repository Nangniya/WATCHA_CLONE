import * as S from './ErrorFallback.styles';

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <S.ErrorContainer>
    <h2>Something went wrong</h2>
    <p>{error.message}</p>
    <button onClick={resetErrorBoundary}>Try again</button>
  </S.ErrorContainer>
);
export default ErrorFallback;
