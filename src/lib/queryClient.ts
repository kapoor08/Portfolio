import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 1000 * 60 * 5,
      retry: 0,
      retryDelay: 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: true,
      throwOnError: (error) => {
        if (import.meta.env.DEV) console.error("Query Error:", error);
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 500 && !import.meta.env.DEV) {
            console.error("Server Error:", error.response.data);
            return true; // Indicate that the error should be thrown
          }
        }
        return false;
      },
    },
  },
});
