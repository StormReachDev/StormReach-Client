// Imports:
import { QueryClient } from '@tanstack/react-query';

// This is singleton query client instance is only for server-side services.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export default queryClient;
