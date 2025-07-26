import {
  mediumKeys,
  useGetMediumPosts,
  useGetMediumPostsWithParams,
  useGetHealthCheck,
  useRefreshMediumPosts,
  usePrefetchMediumPosts,
  useGetMediumPostsOnly,
  useGetLatestMediumPost,
} from "./useCase";

export const medium = {
  keys: mediumKeys,
  useGetMediumPosts,
  useGetMediumPostsWithParams,
  useGetHealthCheck,
  useRefreshMediumPosts,
  usePrefetchMediumPosts,
  useGetMediumPostsOnly,
  useGetLatestMediumPost,
};

export * from "./entity";
