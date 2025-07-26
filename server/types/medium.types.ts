export interface MediumFeedItem {
  title?: string;
  link?: string;
  pubDate?: string;
  creator?: string;
  "dc:creator"?: string;
  "content:encoded"?: string;
  content?: string;
  contentSnippet?: string;
  categories?: string[];
  guid?: string;
}

export interface ProcessedMediumPost {
  title?: string;
  link?: string;
  pubDate?: string;
  author?: string;
  coverImage: string | null;
  description: string;
  contentSnippet?: string;
  categories: string[];
  guid?: string;
}

export interface MediumApiResponse {
  statusCode: number;
  status: string;
  message: string;
  data: ProcessedMediumPost[];
  total: number;
  feedInfo: {
    title?: string;
    description?: string;
    author?: string;
    lastBuildDate?: string;
  };
}

export interface ErrorResponse {
  statusCode: number;
  status: string;
  message: string;
  error: string;
}
