import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IProps } from './QueryProvider.types';
import Devtools from '@/Devtools';

const queryClient = new QueryClient();

const QueryProvider = ({ children }: IProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Devtools />
    </QueryClientProvider>
  );
};

export default QueryProvider;
