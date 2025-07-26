import { VercelRequest, VercelResponse } from "@vercel/node";
import Parser from "rss-parser";
import * as cheerio from "cheerio";

// Types
interface MediumFeedItem {
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

// Configure parser
const parser = new Parser({
  customFields: {
    item: ["content:encoded", "dc:creator"],
  },
});

// Utility functions
const extractCoverImage = (htmlContent: string): string | null => {
  const $ = cheerio.load(htmlContent);
  const firstImg = $("img").first();

  if (firstImg.length) {
    let coverImage = firstImg.attr("src") || null;
    if (coverImage && coverImage.includes("medium.com")) {
      coverImage = coverImage.split("?")[0];
    }
    return coverImage;
  }
  return null;
};

const extractDescription = (
  htmlContent: string,
  fallbackSnippet?: string
): string => {
  if (htmlContent) {
    const $ = cheerio.load(htmlContent);
    $("img, figure").remove();
    const textContent = $.text().replace(/\s+/g, " ").trim();

    if (textContent) {
      return textContent.length > 300
        ? textContent.substring(0, 300) + "..."
        : textContent;
    }
  }

  if (fallbackSnippet) {
    return fallbackSnippet.length > 300
      ? fallbackSnippet.substring(0, 300) + "..."
      : fallbackSnippet;
  }

  return "";
};

// CORS handler
const setCorsHeaders = (res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const feed = await parser.parseURL(
      "https://medium.com/feed/@lakshaykapoor08"
    );

    const posts = feed.items.map((item: MediumFeedItem) => {
      const htmlContent = item["content:encoded"] || item.content || "";
      const coverImage = extractCoverImage(htmlContent);
      const description = extractDescription(htmlContent, item.contentSnippet);

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
    });

    res.status(200).json({
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
    });
  } catch (error) {
    console.error("Error fetching Medium feed:", error);
    res.status(500).json({
      statusCode: 500,
      status: "error",
      message: "Failed to fetch Medium articles",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
