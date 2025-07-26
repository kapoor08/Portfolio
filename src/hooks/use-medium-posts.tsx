import { useQuery } from "@tanstack/react-query";
import { mediumApi } from "@/services/api";

export const MEDIUM_QUERY_KEYS = {
  posts: ["medium", "posts"] as const,
  health: ["medium", "health"] as const,
};

export const useMediumPosts = () => {
  return useQuery({
    queryKey: MEDIUM_QUERY_KEYS.posts,
    queryFn: mediumApi.getPosts,
    staleTime: 1000 * 60 * 10,
    retry: 2,
    select: (data) => data.data,
  });
};

export const useHealthCheck = () => {
  return useQuery({
    queryKey: MEDIUM_QUERY_KEYS.health,
    queryFn: mediumApi.healthCheck,
    staleTime: 1000 * 60 * 2,
    enabled: process.env.NODE_ENV === "development",
  });
};
