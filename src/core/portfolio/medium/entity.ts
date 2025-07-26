// medium/entity.ts
export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  coverImage: string | null;
  description: string;
  categories: string[];
  guid: string;
}

export interface MediumFeedInfo {
  title: string;
  description: string;
  lastBuildDate: string;
}

export interface MediumApiResponse {
  statusCode: number;
  status: string;
  message: string;
  data: MediumPost[];
  total: number;
  feedInfo: MediumFeedInfo;
}

export interface HealthCheckResponse {
  status: string;
  timestamp: string;
  service: string;
  version?: string;
}

export interface ApiError {
  statusCode: number;
  status: string;
  message: string;
  error?: string;
}
