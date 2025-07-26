import Parser from "rss-parser";

export const mediumParser = new Parser({
  customFields: {
    item: ["content:encoded", "dc:creator"],
  },
});

export const MEDIUM_FEED_URL = "https://medium.com/feed/@lakshaykapoor08";
