import * as cheerio from "cheerio";

export const extractCoverImage = (htmlContent: string): string | null => {
  const $ = cheerio.load(htmlContent);
  const firstImg = $("img").first();

  if (firstImg.length) {
    let coverImage = firstImg.attr("src") || null;
    // Clean up Medium's image URLs if needed
    if (coverImage && coverImage.includes("medium.com")) {
      coverImage = coverImage.split("?")[0]; // Remove query parameters
    }
    return coverImage;
  }

  return null;
};

export const extractDescription = (
  htmlContent: string,
  fallbackSnippet?: string
): string => {
  if (htmlContent) {
    const $ = cheerio.load(htmlContent);
    // Remove images and get clean text
    $("img, figure").remove();
    const textContent = $.text().replace(/\s+/g, " ").trim();

    if (textContent) {
      return textContent.length > 300
        ? textContent.substring(0, 300) + "..."
        : textContent;
    }
  }

  // Fallback to contentSnippet
  if (fallbackSnippet) {
    return fallbackSnippet.length > 300
      ? fallbackSnippet.substring(0, 300) + "..."
      : fallbackSnippet;
  }

  return "";
};
