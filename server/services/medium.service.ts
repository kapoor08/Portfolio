import { mediumParser, MEDIUM_FEED_URL } from "../config/parser.js";
import {
  extractCoverImage,
  extractDescription,
} from "../utils/content.utils.js";
import {
  MediumFeedItem,
  ProcessedMediumPost,
  MediumApiResponse,
} from "../types/medium.types.js";

export class MediumService {
  async fetchMediumPosts(): Promise<MediumApiResponse> {
    try {
      const feed = await mediumParser.parseURL(MEDIUM_FEED_URL);

      const posts: ProcessedMediumPost[] = feed.items.map(
        (item: MediumFeedItem) => {
          const htmlContent = item["content:encoded"] || item.content || "";

          const coverImage = extractCoverImage(htmlContent);
          const description = extractDescription(
            htmlContent,
            item.contentSnippet
          );

          return {
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            author: item["dc:creator"] || item.creator,
            coverImage,
            description,
            contentSnippet: item.contentSnippet,
            categories: item.categories || [],
            guid: item.guid,
          };
        }
      );

      return {
        statusCode: 200,
        status: "success",
        message: "Posts fetched successfully",
        data: posts,
        total: posts.length,
        feedInfo: {
          title: feed.title,
          description: feed.description,
          author: feed.title,
          lastBuildDate: feed.lastBuildDate,
        },
      };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Unknown error occurred"
      );
    }
  }
}
