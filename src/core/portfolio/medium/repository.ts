// medium/repository.ts
import request from "../request";
import { MediumApiResponse, HealthCheckResponse } from "./entity";

// Repository functions for Medium API
export const getMediumPosts = async (): Promise<MediumApiResponse> => {
  const config = {
    method: "GET" as const,
    relativePath: "/medium",
  };
  return await request<MediumApiResponse>(config);
};

export const getHealthCheck = async (): Promise<HealthCheckResponse> => {
  const config = {
    method: "GET" as const,
    relativePath: "/health",
  };
  return await request<HealthCheckResponse>(config);
};

// If you want to add pagination or filtering later
export const getMediumPostsWithParams = async ({
  limit,
  offset,
}: {
  limit?: number;
  offset?: number;
} = {}): Promise<MediumApiResponse> => {
  const config = {
    method: "GET" as const,
    relativePath: "/medium",
    params: {
      ...(limit && { limit }),
      ...(offset && { offset }),
    },
  };
  return await request<MediumApiResponse>(config);
};
