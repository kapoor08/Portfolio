// medium/useCase.ts
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  getMediumPosts,
  getHealthCheck,
  getMediumPostsWithParams,
} from "./repository";
import {
  MediumApiResponse,
  HealthCheckResponse,
  MediumPost,
  ApiError,
} from "./entity";

// Query keys for better cache management
export const mediumKeys = {
  all: ["medium"] as const,
  posts: () => [...mediumKeys.all, "posts"] as const,
  postsWithParams: (params: { limit?: number; offset?: number }) =>
    [...mediumKeys.all, "posts", params] as const,
  health: () => [...mediumKeys.all, "health"] as const,
};

// Get Medium posts query
export const useGetMediumPosts = (
  enabled = true
): UseQueryResult<MediumApiResponse, ApiError> => {
  return useQuery({
    queryKey: mediumKeys.posts(),
    queryFn: getMediumPosts,
    enabled,
  });
};

// Get Medium posts with parameters
export const useGetMediumPostsWithParams = (
  params: { limit?: number; offset?: number } = {},
  enabled = true
): UseQueryResult<MediumApiResponse, ApiError> => {
  return useQuery({
    queryKey: mediumKeys.postsWithParams(params),
    queryFn: () => getMediumPostsWithParams(params),
    enabled: enabled && Object.keys(params).length > 0,
  });
};

// Health check query
export const useGetHealthCheck = (
  enabled = import.meta.env.DEV
): UseQueryResult<HealthCheckResponse, ApiError> => {
  return useQuery({
    queryKey: mediumKeys.health(),
    queryFn: getHealthCheck,
    enabled,
  });
};

// Refresh posts mutation
export const useRefreshMediumPosts = (): UseMutationResult<
  string,
  ApiError,
  void,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["medium", "refresh"],
    mutationFn: async () => {
      await queryClient.invalidateQueries({
        queryKey: mediumKeys.posts(),
      });
      return "Posts refreshed successfully";
    },
    onSuccess: () => {
      console.log("Medium posts refreshed successfully!");
    },
    onError: (error: ApiError) => {
      console.error("Failed to refresh posts:", error.message);
    },
  });
};

// Prefetch posts mutation
export const usePrefetchMediumPosts = (): UseMutationResult<
  void,
  ApiError,
  void,
  unknown
> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["medium", "prefetch"],
    mutationFn: async () => {
      await queryClient.prefetchQuery({
        queryKey: mediumKeys.posts(),
        queryFn: getMediumPosts,
      });
    },
    onSuccess: () => {
      console.log("Medium posts prefetched successfully!");
    },
  });
};

// Selector hooks for specific data transformations
export const useGetMediumPostsOnly = (
  enabled = true
): UseQueryResult<MediumPost[], ApiError> => {
  return useQuery({
    queryKey: [...mediumKeys.posts(), "posts-only"],
    queryFn: getMediumPosts,
    enabled,
    select: (data: MediumApiResponse) => data.data,
  });
};

export const useGetLatestMediumPost = (
  enabled = true
): UseQueryResult<MediumPost | undefined, ApiError> => {
  return useQuery({
    queryKey: [...mediumKeys.posts(), "latest"],
    queryFn: getMediumPosts,
    enabled,
    select: (data: MediumApiResponse) => data.data[0],
  });
};
