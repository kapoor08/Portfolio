// Types
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

export interface MediumApiResponse {
  statusCode: number;
  status: string;
  message: string;
  data: MediumPost[];
  total: number;
  feedInfo: {
    title: string;
    description: string;
    lastBuildDate: string;
  };
}

// API functions
export const mediumApi = {
  // Fetch Medium posts
  async getPosts(): Promise<MediumApiResponse> {
    const response = await fetch("/api/medium");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    const response = await fetch("/api/health");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
};
