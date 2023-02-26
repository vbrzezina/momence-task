import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: process.env.NODE_ENV !== 'test',
      retry: process.env.NODE_ENV !== 'test' ? 3 : false,
      retryDelay: 1000,
    },
  },
});
